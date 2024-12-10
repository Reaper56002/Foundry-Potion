export const potionRecipes = [
    // Common Potions
    {
        name: "Health Potion (Common)",
        grade: "Common",
        ingredients: [
            { name: "Red Herb", quantity: 2 },
            { name: "Water", quantity: 1 }
        ],
        difficulty: 1,
        description: "Restores a small amount of health."
    },
    {
        name: "Mana Potion (Common)",
        grade: "Common",
        ingredients: [
            { name: "Blue Herb", quantity: 2 },
            { name: "Water", quantity: 1 }
        ],
        difficulty: 1,
        description: "Restores a small amount of mana."
    },

    // Uncommon Potions
    {
        name: "Stamina Potion (Uncommon)",
        grade: "Uncommon",
        ingredients: [
            { name: "Green Herb", quantity: 3 },
            { name: "Crystalized Essence", quantity: 1 }
        ],
        difficulty: 2,
        description: "Boosts stamina recovery for a short time."
    },
    {
        name: "Antidote Potion (Uncommon)",
        grade: "Uncommon",
        ingredients: [
            { name: "Purple Mushroom", quantity: 2 },
            { name: "Charcoal Dust", quantity: 1 }
        ],
        difficulty: 2,
        description: "Cures poison effects."
    },

    // Rare Potions
    {
        name: "Health Potion (Rare)",
        grade: "Rare",
        ingredients: [
            { name: "Red Herb", quantity: 5 },
            { name: "Golden Lotus", quantity: 1 },
            { name: "Water", quantity: 2 }
        ],
        difficulty: 3,
        description: "Restores a moderate amount of health."
    },
    {
        name: "Mana Potion (Rare)",
        grade: "Rare",
        ingredients: [
            { name: "Blue Herb", quantity: 5 },
            { name: "Moonflower", quantity: 1 },
            { name: "Water", quantity: 2 }
        ],
        difficulty: 3,
        description: "Restores a moderate amount of mana."
    },

    // Epic Potions
    {
        name: "Elixir of Vitality (Epic)",
        grade: "Epic",
        ingredients: [
            { name: "Golden Lotus", quantity: 2 },
            { name: "Dragonblood Shard", quantity: 1 },
            { name: "Ethereal Water", quantity: 1 }
        ],
        difficulty: 4,
        description: "Greatly boosts health and stamina recovery for a duration."
    },
    {
        name: "Elixir of Sorcery (Epic)",
        grade: "Epic",
        ingredients: [
            { name: "Moonflower", quantity: 2 },
            { name: "Arcane Crystal", quantity: 1 },
            { name: "Ethereal Water", quantity: 1 }
        ],
        difficulty: 4,
        description: "Significantly increases mana recovery for a duration."
    },

    // Legendary Potions
    {
        name: "Potion of Immortality (Legendary)",
        grade: "Legendary",
        ingredients: [
            { name: "Phoenix Feather", quantity: 1 },
            { name: "Dragonblood Shard", quantity: 2 },
            { name: "Eternal Flame Essence", quantity: 1 }
        ],
        difficulty: 5,
        description: "Temporarily grants invincibility for a short duration."
    },
    {
        name: "Potion of Transcendence (Legendary)",
        grade: "Legendary",
        ingredients: [
            { name: "Ethereal Water", quantity: 3 },
            { name: "Arcane Crystal", quantity: 2 },
            { name: "Starflower Petal", quantity: 1 }
        ],
        difficulty: 5,
        description: "Boosts all attributes significantly for a short duration."
    }
];
