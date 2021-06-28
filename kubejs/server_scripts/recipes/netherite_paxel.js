// kubejs/server_scripts/example.js
// This is just an example script to show off multiple types of recipes and removal methods
// Supports /reload

// Listen to server recipe event
onEvent('recipes', event => {
  // Add a smithing recipe that combines 2 items into one (in this case apple and gold ingot into golden apple)
  event.shapeless('kubejs:netherite_triple_ingot', ['3x minecraft:netherite_ingot'])
  event.smithing('easypaxellite:netherite_paxel', 'easypaxellite:diamond_paxel', 'kubejs:netherite_triple_ingot')
})