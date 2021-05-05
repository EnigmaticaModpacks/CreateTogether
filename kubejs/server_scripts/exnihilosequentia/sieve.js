onEvent('recipes', (event) => {
    const recipes = [
        {
            type: 'exnihilosequentia:sieve',
            rolls: [
                {
                    chance: 0.05,
                    mesh: 'flint'
                },
                {
                    chance: 0.075,
                    mesh: 'iron'
                },
                {
                    chance: 0.1,
                    mesh: 'diamond'
                },
                {
                    chance: 0.125,
                    mesh: 'emerald'
                },
                {
                    chance: 0.15,
                    mesh: 'netherite'
                }
            ],
            input: {
                item: 'minecraft:gravel'
            },
            result: {
                item: 'create:crushed_copper_ore'
            }
        },
        {
            type: 'exnihilosequentia:sieve',
            rolls: [
                {
                    chance: 0.1,
                    mesh: 'flint'
                },
                {
                    chance: 0.15,
                    mesh: 'iron'
                },
                {
                    chance: 0.25,
                    mesh: 'diamond'
                },
                {
                    chance: 0.3,
                    mesh: 'emerald'
                },
                {
                    chance: 0.4,
                    mesh: 'netherite'
                }
            ],
            input: {
                item: 'minecraft:gravel'
            },
            result: {
                item: 'create:crushed_iron_ore'
            }
        },
        {
            type: 'exnihilosequentia:sieve',
            rolls: [
                {
                    chance: 0.05,
                    mesh: 'flint'
                },
                {
                    chance: 0.075,
                    mesh: 'iron'
                },
                {
                    chance: 0.1,
                    mesh: 'diamond'
                },
                {
                    chance: 0.125,
                    mesh: 'emerald'
                },
                {
                    chance: 0.15,
                    mesh: 'netherite'
                }
            ],
            input: {
                item: 'minecraft:sand'
            },
            result: {
                item: 'create:crushed_zinc_ore'
            }
        },
        {
            type: 'exnihilosequentia:sieve',
            rolls: [
                {
                    chance: 0.05,
                    mesh: 'flint'
                },
                {
                    chance: 0.075,
                    mesh: 'iron'
                },
                {
                    chance: 0.15,
                    mesh: 'diamond'
                },
                {
                    chance: 0.2,
                    mesh: 'emerald'
                },
                {
                    chance: 0.25,
                    mesh: 'netherite'
                }
            ],
            input: {
                item: 'minecraft:sand'
            },
            result: {
                item: 'create:crushed_gold_ore'
            }
        }
    ];
    recipes.forEach((recipe) => {
        event.custom(recipe);
    });
});
