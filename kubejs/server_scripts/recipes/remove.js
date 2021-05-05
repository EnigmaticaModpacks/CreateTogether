onEvent('recipes', (event) => {
    const removals = [
        {
            mod: 'refinedstorage'
        },
        {
            type: 'exnihilosequentia:compost'
        },
        {
            type: 'exnihilosequentia:crook'
        },
        {
            type: 'exnihilosequentia:crucible'
        },
        {
            type: 'exnihilosequentia:fluid_item'
        },
        {
            type: 'exnihilosequentia:fluid_on_top'
        },
        {
            type: 'exnihilosequentia:fluid_transform'
        },
        {
            type: 'exnihilosequentia:heat'
        },
        {
            type: 'exnihilosequentia:hammer'
        },
        {
            type: 'exnihilosequentia:sieve'
        }
    ];
    removals.forEach((removal) => {
        event.remove(removal);
    });
});
