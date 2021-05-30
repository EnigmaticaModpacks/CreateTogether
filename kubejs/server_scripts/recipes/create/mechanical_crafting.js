onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'create_stuff_additions:encased_jet_chestplate',
            pattern: [' BDB ', ' BEB ', 'FBBBF', 'CFIFC'],
            key: {
                E: {
                    item: 'minecraft:elytra'
                },
                D: {
                    item: 'quark:dragon_scale'
                },
                B: {
                    item: 'create:brass_sheet'
                },
                C: {
                    item: 'create:cogwheel'
                },
                F: {
                    item: 'create:encased_fan'
                },
                I: {
                    item: 'create:integrated_circuit'
                }
            },
            id: 'create_stuff_additions:encased_jet_chestplate'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
