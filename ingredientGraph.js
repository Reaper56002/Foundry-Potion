
export const ingredientGraph = {
    nodes: new Set(), 
    edges: [],        

   
    addNode(ingredient) {
        if (!this.nodes.has(ingredient)) {
            this.nodes.add(ingredient);
            console.log(`Ingredient added: ${ingredient}`);
        }
    },

   
    addEdge(from, to) {
        if (this.nodes.has(from) && this.nodes.has(to)) {
            this.edges.push({ from, to });
            console.log(`Edge added: ${from} -> ${to}`);
        } else {
            console.warn(`Cannot create edge: one or both ingredients (${from}, ${to}) are not in the graph.`);
        }
    },

    
    getSources(product) {
        return this.edges.filter(edge => edge.to === product).map(edge => edge.from);
    },

    
    visualize() {
        console.log('Ingredient Graph:');
        console.log('Nodes:', Array.from(this.nodes));
        console.log('Edges:', this.edges.map(edge => `${edge.from} -> ${edge.to}`));
    }
};



