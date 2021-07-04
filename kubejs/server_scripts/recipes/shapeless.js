onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'kubejs:netherite_triple_ingot',
            inputs: ['3x minecraft:netherite_ingot']
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs);
    });
});
