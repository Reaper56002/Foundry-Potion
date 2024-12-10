const ingredientGraph = new Map();
export function addDependency(ingredient, dependentIngredient) {
    if (!ingredientGraph.has(ingredient)) {
        ingredientGraph.set(ingredient, []);
    }
    ingredientGraph.get(ingredient).push(dependentIngredient);
}
