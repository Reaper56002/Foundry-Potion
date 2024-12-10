
console.log("Potion Crafting Module Loading...");


import "./ui/sheetMods.js";
import "./ui/craftingUI.js";


import { potionRecipes } from "./data/recipes.js";
import { initializeInventory } from "./data/inventory.js";
import { addDependency } from "./data/dependencies.js";
import { TreeNode } from "./structures/TreeNode.js";
import { ingredientGraph } from "./structures/ingredientGraph.js";


Hooks.once('init', () => {
  initializeInventory();
  console.log("Potion Crafting System Initialized");
});












