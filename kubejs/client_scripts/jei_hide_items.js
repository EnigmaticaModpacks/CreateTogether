onEvent('jei.hide.items', (event) => {
    const items = [
        /quark:limestone/,
        /quark:\w+_limestone/,
        /refinedstorage:(?!controller|cable|crafting_grid|external_storage)\w+/,
        /exnihilosequentia:(?!hammer|sieve|mesh)\w+/,
        /quark:\w+_shard/,
        'exnihilosequentia:mesh_string',
        /theoneprobe:/,
        /simplybackpacks:(?!common)\w+/,
        /create_stuff_additions:(?!encased_jet\w+)\w+/
    ];

    items.forEach((item) => {
        event.hide(item);
    });

    [
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black',
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray'
    ].forEach((color) => {
        event.hide('/refinedstorage:' + color + '\\w/');
    });
});
