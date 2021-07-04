onEvent('jei.hide.items', (event) => {
    const items = [
        /easypaxellite:(?!wood_paxel|stone_paxel|iron_paxel|golden_paxel|diamond_paxel|netherite_paxel)\w+/,

        /quark:\w+_shard/,
        /quark:limestone/,
        /quark:\w+_limestone/,

        /refinedstorage:(?!controller|cable|crafting_grid|external_storage)\w+/,

        /simplybackpacks:(?!common)\w+/,

        /theoneprobe:/
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
