events.listen('item.tags', (event) => {
    event.add(
        'create:fan_heaters',
        fan_heaters.filter((item) => item != 'minecraft:lava' && item != 'create:lit_blaze_burner')
    );
});
