onEvent('item.tooltip', (event) => {
    const recipes = [];

    //refinedStorageItems variable is in the constants.js file
    refinedStorageItems.forEach((item) => {
        recipes.push({
            items: ['refinedstorage:' + item],
            text: [Text.of('Can be dyed by right clicking it with dye in-world.').blue()]
        });
    });

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
