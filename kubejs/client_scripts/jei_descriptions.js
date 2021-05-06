onEvent('jei.information', (event) => {
    //refinedStorageItems variable is in the constants.js file
    refinedStorageItems.forEach((item) => {
        event.add(`refinedstorage:${item}`, 'Can be dyed by right clicking it with dye in-world.');
    });
});
