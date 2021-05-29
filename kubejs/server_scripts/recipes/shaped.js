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
            output: 'exnihilosequentia:mesh_flint',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:rods/wooden',
                B: 'minecraft:flint'
            },
            id: 'exnihilosequentia:ens_mesh_flint'
        },
        {
            output: 'simplybackpacks:commonbackpack',
            pattern: ['AAA', 'ADA', 'CBC'],
            key: {
                A: ['minecraft:white_wool', 'quark:white_quilted_wool'],
                B: '#forge:chests/wooden',
                C: '#forge:leather',
                D: '#forge:string'
            },
            id: 'simplybackpacks:commonbackpack'
        },
        {
            output: 'create_stuff_additions:encased_jet_chestplate',
            pattern: ['010', '303', '676'],
            key: {
                0: {
                    item: 'create:brass_ingot'
                },
                1: {
                    item: 'create:brass_sheet'
                },
                3: {
                    item: 'create:cogwheel'
                },
                6: {
                    item: 'create:encased_fan'
                },
                7: {
                    item: 'create:integrated_circuit'
                }
            },
            id: 'create_stuff_additions:encased_jet_chestplate'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
