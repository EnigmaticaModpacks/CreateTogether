onEvent('recipes', (event) => {
    const recipes = [
        {
            outputs: [Item.of('create:zinc_nugget').chance(0.12), Item.of('minecraft:gravel').chance(0.5)],
            input: 'minecraft:andesite'
        },
        {
            outputs: [Item.of('create:copper_nugget').chance(0.12), Item.of('minecraft:clay_ball').chance(0.5)],
            input: 'create:limesand'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.splashing(recipe.outputs, recipe.input);
    });
});
