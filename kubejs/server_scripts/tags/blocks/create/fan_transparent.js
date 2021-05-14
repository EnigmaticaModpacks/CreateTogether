events.listen('block.tags', (event) => {
    event.add('create:fan_transparent', [
        /bars/,
        /chain_link/,
        /leaves/,
        /scaffolding_standard/,
        /scaffolding_grate/,
        'quark:grate',
        'minecraft:scaffolding',
        'minecraft:chain',
        'decorative_blocks:chain'
    ]);
});
