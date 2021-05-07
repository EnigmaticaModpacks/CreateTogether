onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'refinedstorage:external_storage',
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: 'create:andesite_alloy',
                B: '#forge:chests',
                C: 'refinedstorage:cable',
                D: 'minecraft:observer'
            },
            id: 'refinedstorage:external_storage'
        },
        {
            output: 'refinedstorage:controller',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'create:andesite_alloy',
                B: 'create:electron_tube',
                C: 'refinedstorage:cable',
                D: 'minecraft:diamond',
                E: 'minecraft:observer'
            },
            id: 'refinedstorage:controller'
        },
        {
            output: 'refinedstorage:cable',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'create:andesite_alloy',
                B: '#forge:dusts/redstone',
                C: '#forge:glass'
            },
            id: 'refinedstorage:cable'
        },
        {
            output: 'refinedstorage:cable',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: 'create:andesite_alloy',
                B: '#forge:dusts/redstone',
                C: '#forge:glass'
            },
            id: 'refinedstorage:cable_mirrored'
        },
        {
            output: 'refinedstorage:crafting_grid',
            pattern: ['ABA', 'EDC', 'AAA'],
            key: {
                A: 'create:andesite_alloy',
                B: '#forge:dusts/redstone',
                C: '#forge:glass',
                D: '#forge:gems/diamond',
                E: 'refinedstorage:cable'
            },
            id: 'refinedstorage:crafting_grid/crafting_grid'
        },
        {
            output: 'refinedstorage:crafting_grid',
            pattern: ['ABA', 'CDE', 'AAA'],
            key: {
                A: 'create:andesite_alloy',
                B: '#forge:dusts/redstone',
                C: '#forge:glass',
                D: '#forge:gems/diamond',
                E: 'refinedstorage:cable'
            },
            id: 'refinedstorage:crafting_grid/crafting_grid_mirrored'
        },
        {
            output: 'exnihilosequentia:mesh_string',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: '#forge:rods/wooden'
            },
            id: 'exnihilosequentia:ens_mesh_string'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
