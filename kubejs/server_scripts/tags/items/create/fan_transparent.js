events.listen('item.tags', (event) => {
    event.add('create:fan_transparent', fan_transparent);
});
