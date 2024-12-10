


import { openPotionCraftingUI } from "./craftingUI.js"; 


Hooks.on("renderActorSheet5eCharacter", (app, html, data) => {
   
    if (app.actor.type !== "character") return;

   
    const nav = html.find('.sheet-navigation.tabs');
    if (!nav.length) {
        console.warn("sheetMods.js: Navigation tabs not found. Cannot add crafting tab.");
        return;
    }

    
    nav.append(`
        <a class="item" data-tab="crafting">Potion Crafting</a>
    `);

    
    const sheetBody = html.find('.sheet-body');
    sheetBody.append(`
        <div class="tab crafting" data-tab="crafting">
            <h1>Potion Crafting</h1>
            <p>Select your ingredients and craft potions here.</p>
            <button class="craft-potions">Open Crafting UI</button>
        </div>
    `);

    
    html.find('.craft-potions').click(() => {
        console.log("Potion Crafting button clicked from navigation tab!");
        if (typeof openPotionCraftingUI === "function") {
            openPotionCraftingUI(app.actor);
        } else {
            console.error("openPotionCraftingUI is not defined!");
        }
    });
});
