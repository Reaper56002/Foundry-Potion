import { potionRecipes } from "../data/recipes.js";
import { hasIngredients, consumeIngredients } from "./inventory.js";


export function openPotionCraftingUI(actor) {
    if (!actor) {
        console.error("Actor not provided for crafting UI.");
        return;
    }

    const grades = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];
    let selectedGrade = "Common"; // Default to Common potions

    // Render the dialog
    const dialogContent = `
        <h1>Potion Crafting</h1>
        <div>
            <label for="grade-filter">Filter by Grade:</label>
            <select id="grade-filter">
                ${grades.map(grade => `<option value="${grade}">${grade}</option>`).join("")}
            </select>
        </div>
        <div id="recipe-list"></div>
        <div id="crafting-result"></div>
    `;

    const craftingDialog = new Dialog({
        title: "Potion Crafting System",
        content: dialogContent,
        buttons: {
            close: { label: "Close" }
        },
        render: (html) => {
            // Populate recipe list on dialog render
            populateRecipeList(html, actor, selectedGrade);

            // Handle grade filter change
            html.find("#grade-filter").change(function () {
                selectedGrade = $(this).val();
                populateRecipeList(html, actor, selectedGrade);
            });
        }
    });

    craftingDialog.render(true);
}

/**
 * Populate the recipe list for the given actor and grade.
 */
function populateRecipeList(html, actor, grade) {
    const recipes = potionRecipes.filter(recipe => recipe.grade === grade);
    const recipeList = html.find("#recipe-list");

    if (recipes.length === 0) {
        recipeList.html(`<p>No recipes available for ${grade} potions.</p>`);
        return;
    }

    let listHtml = `<ul>`;
    recipes.forEach(recipe => {
        listHtml += `
            <li>
                <strong>${recipe.name}</strong> - ${recipe.description}
                <button class="craft-btn" data-name="${recipe.name}">Craft</button>
                <ul>
                    ${recipe.ingredients.map(ing => `<li>${ing.quantity}x ${ing.name}</li>`).join("")}
                </ul>
            </li>
        `;
    });
    listHtml += `</ul>`;
    recipeList.html(listHtml);

    // Attach event listeners for crafting buttons
    html.find(".craft-btn").click(function () {
        const potionName = $(this).data("name");
        handleCraftPotion(actor, potionName, html);
    });
}

/**
 * Handle crafting a potion for a specific actor in D&D5e.
 * Ensures that the item created is a valid D&D5e consumable item with proper fields.
 */
async function handleCraftPotion(actor, potionName, html) {
    const recipe = potionRecipes.find(r => r.name === potionName);
    const resultArea = html.find("#crafting-result");

    if (!recipe) {
        resultArea.html(`<p class="error">Error: Recipe not found.</p>`);
        return;
    }

    if (!hasIngredients(actor, recipe.ingredients)) {
        resultArea.html(`<p class="error">You don't have the necessary ingredients for ${potionName}.</p>`);
        return;
    }

    // Consume ingredients before creating the potion
    await consumeIngredients(actor, recipe.ingredients);

    // Update the result area with success message
    resultArea.html(`<p class="success">Successfully crafted ${potionName}!</p>`);

    // Create the crafted potion as a new item in the actor's inventory
    // D&D5e items typically store their description in system.description.value
    // and their quantity in system.quantity.
    await actor.createEmbeddedDocuments("Item", [
        {
            name: recipe.name,
            type: "consumable",
            system: {
                quantity: 1,
                description: {
                    value: recipe.description
                }
                // Additional fields can be included as needed, e.g.:
                // "rarity": "Common",
                // "weight": 0.1,
                // "price": 50,
            }
        }
    ]);

    console.log(`${potionName} crafted and added to ${actor.name}'s inventory.`);
}

