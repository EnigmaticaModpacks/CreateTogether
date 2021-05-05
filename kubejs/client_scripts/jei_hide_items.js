onEvent('jei.hide.items', (event) => {
    const items = [/quark:limestone/, /quark:\w+_limestone/, /refinedstorage/];

    items.forEach((item) => {
        event.hide(item);
    });

    const colors = [
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
