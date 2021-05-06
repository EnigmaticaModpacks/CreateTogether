onEvent('item.tooltip', (event) => {
    const recipes = [];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
    //refinedStorageItems variable is in the constants.js file
    refinedStorageItems.forEach((item) => {
        recipes.push({
            items: ['refinedstorage:' + item],
            text: ['Can be dyed by right clicking it with dye in-world.']
        });
    });
});
