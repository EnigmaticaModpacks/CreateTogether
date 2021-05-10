# CreateTogether 1.0.3⟶CreateTogether 1.0.4

## Added

* [Colds: Easy Paxel (Lite) (FORGE)](https://www.curseforge.com/minecraft/mc-mods/colds-easy-paxel-lite)
* [Simple Magnets](https://www.curseforge.com/minecraft/mc-mods/simple-magnets)
* [SuperMartijn642's Config Lib](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-config-lib)
* [SuperMartijn642's Core Lib](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib)
* [The One Probe](https://www.curseforge.com/minecraft/mc-mods/the-one-probe)

## Updated

### [Architectury API (Forge)](https://www.curseforge.com/minecraft/mc-mods/architectury-forge) ([[Forge 1.16.4/5] v1.12.148](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3296137)⟶[[Forge 1.16.4/5] v1.12.149](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3302580))

#### [[Forge 1.16.4/5] v1.12.149](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3302580)

Architectury v1.12.149 for 1.16.4/5

Updated at 2021-05-08 11:33.

[Click here for changelog](https://www.github.com/architectury/architectury/commits/8de2c93)

* Fixes CME with Platform#getMod
* Update to Architectury Plugin 3.1 to support detecting the api FabricLoader
* Add interruptTrue/Default/False as util methods
* Bump to 1.11
* Some more (mostly Entity-based) Events (#75)
* Re-license header
* Add docs
* Add getCustomEquipmentSlot
* Close #39
* Fix invalid events
* Bump forge event priority to HIGH
* Add EntityHooks.fromCollision to retrieve an entity from block collision (#64)
* Add @SubscribeEvent to ColorHandlersImpl
* Remove addListener from ColorHandlersImpl
* Fix Forge Screen Events to be consistent with the fabric implementation: InteractionResult.SUCCESS should also indicate that the event should be cancelled.
* More annotation event migration
* Migrate Forge ReloadListeners events to annotations
* Fix CLIENT_WORLD_LOAD on Forge
* Bump to 1.9
* Change at
* Rewrite the GuiEvent.SET_SCREEN mixin to fix #35
* Update plugins
* Add lightning strikes to the debug mod
* Update plugin
* Update plugins
* Add EntityRenderers (#52)
* Fix BlockEntityExtension @Shadow remapping
* Update architectury-plugin to 3.0.89 and fix #51
* Revert "Remove locals requirements from BlockLandingInvoker"
* Remove local testing build of transformer
* Remove locals requirements from BlockLandingInvoker
* Update architectury-plugin to 3.0.88
* Implement onDataPacket (#48)
* Add null checks to networking for better errors.
* Remove jcenter from settings.gradle
* Bump to 1.8
* Fix block entity without position
* Implement Tag#equals and Tag#hashCode on forge because forge is nice
* Add license
* Add test mod and fix game rules on forge
* Add licenses and implement optional tags, requires some testing.
* Fix forge publishing as fabric
* Migrate to Arch Plugin 3
* Update README.md
* Publish the platform specific jars on a different artifact id to resolve issues with transitive dependencies.
* (Retroactively) bump version to 1.6
* Fix falling block land event to handle all (vanilla) blocks correctly (Modded blocks need to have super.onLand(...) and then they'll be fine too)

[(129 more lines)](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3302580)

### [KubeJS (Forge)](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge) ([kubejs-1605.3.7-build.190-forge.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3297583)⟶[kubejs-1605.3.7-build.192-forge.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3304232))

#### [kubejs-1605.3.7-build.192-forge.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3304232)

* Add list of categories to "category not found" error in jei.yeet.recipes - Max
* Add event to hide jei recipes - 'jei.yeet.recipes' - Max
* Add tag utility methods to items, blocks, fluids - Max

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/all)

## Removed

* [Biome Id Fixer (Forge)](https://www.curseforge.com/minecraft/mc-mods/biome-id-fixer)

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
