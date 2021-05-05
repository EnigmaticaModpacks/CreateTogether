onEvent('recipes', (event) => {
    const recipes = [
        {
            results: [
                {
                    chance: 1.0,
                    item: 'minecraft:sand',
                    count: 1
                }
            ],
            input: {
                item: 'minecraft:gravel'
            }
        },
        {
            results: [
                {
                    chance: 1.0,
                    item: 'exnihilosequentia:crushed_netherrack',
                    count: 1
                }
            ],
            input: {
                item: 'minecraft:netherrack'
            }
        },
        {
            results: [
                {
                    chance: 1.0,
                    item: 'minecraft:gravel',
                    count: 1
                }
            ],
            input: {
                item: 'minecraft:cobblestone'
            }
        },
        {
            results: [
                {
                    chance: 1.0,
                    item: 'minecraft:cobblestone',
                    count: 1
                }
            ],
            input: {
                item: 'minecraft:stone'
            }
        }
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'exnihilosequentia:hammer',
            outputs: recipe.results,
            input: recipe.input
        });
    });
});
