onEvent('recipes', (event) => {
    const removals = [
        {
            id: /refinedstorage:(?!controller|cable|crafting_grid|external_storage|quartz_enriched_iron|quartz_enriched_iron_block)\w+/
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
