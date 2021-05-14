events.listen('item.tags', (event) => {
    event.add('create:upright_on_belt', [/bucket/, /bottle$/, /juice/, 'quark:bottled_cloud']);
});
