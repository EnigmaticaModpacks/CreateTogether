# CreateTogether 1.0.4⟶CreateTogether 1.0.5

## Added

* [Clumps](https://www.curseforge.com/minecraft/mc-mods/clumps)
* [Decorative Blocks](https://www.curseforge.com/minecraft/mc-mods/decorative-blocks)
* [FastFurnace](https://www.curseforge.com/minecraft/mc-mods/fastfurnace)
* [FastSuite](https://www.curseforge.com/minecraft/mc-mods/fastsuite)
* [FastWorkbench](https://www.curseforge.com/minecraft/mc-mods/fastworkbench)
* [Lazy DataFixerUpper(LazyDFU) [FORGE]](https://www.curseforge.com/minecraft/mc-mods/lazy-dfu-forge)

## Updated

### [Architectury API (Forge)](https://www.curseforge.com/minecraft/mc-mods/architectury-forge) ([[Forge 1.16.4/5] v1.12.149](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3302580)⟶[[Forge 1.16.4/5] v1.13.153](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3307825))

#### [[Forge 1.16.4/5] v1.13.153](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3307825)

Architectury v1.13.153 for 1.16.4/5

Updated at 2021-05-13 05:16.

[Click here for changelog](https://www.github.com/architectury/architectury/commits/c675bf6)

* Adds EntityAttributes (#83)
* Allow being more flexible in registering
* Add FuelRegistry (#81)
* Remove @NotNull spam Things should be non null by default, and we mark @Nullable otherwise
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

[(129 more lines)](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3307825)

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/all)

### [Cloth Config API (Forge)](https://www.curseforge.com/minecraft/mc-mods/cloth-config-forge) ([[Forge 1.16.4/5] v4.11.19](https://www.curseforge.com/minecraft/mc-mods/cloth-config-forge/files/3261152)⟶[[Forge 1.16.4/5] v4.11.24](https://www.curseforge.com/minecraft/mc-mods/cloth-config-forge/files/3304791))

#### [[Forge 1.16.4/5] v4.11.24](https://www.curseforge.com/minecraft/mc-mods/cloth-config-forge/files/3304791)

No changelog available.

### [Just Enough Items (JEI)](https://www.curseforge.com/minecraft/mc-mods/jei) ([jei-1.16.5-7.6.4.90.jar](https://www.curseforge.com/minecraft/mc-mods/jei/files/3295418)⟶[jei-1.16.5-7.7.0.91.jar](https://www.curseforge.com/minecraft/mc-mods/jei/files/3308495))

#### [Just Enough Items (JEI) 7.7.0](https://www.curseforge.com/minecraft/mc-mods/jei/files/3308495)

* [Update FTB Library integration (#2334)](https://github.com/mezz/JustEnoughItems/commit/788e6d8ee8c7d0a8c84da4e650b0ad12704f420b) - Kristi��ns Mic��tis
* [Update fr_fr.json (#2348)](https://github.com/mezz/JustEnoughItems/commit/785d1b1b126cf52d0f213db00a0f0ae706354aa1) - Aarrn33

### [KubeJS (Forge)](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge) ([kubejs-1605.3.7-build.192-forge.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3304232)⟶[kubejs-1605.3.7-build.196-forge.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3309392))

#### [kubejs-1605.3.7-build.196-forge.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3309392)

* Fixed crash with fluids, removed Resourceful Bees runtime dep - LatvianModder

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/all)

### [Rhino](https://www.curseforge.com/minecraft/mc-mods/rhino) ([rhino-1.7.13-build.23.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3279704)⟶[rhino-1.7.13-build.24.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3306904))

#### [rhino-1.7.13-build.24.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3306904)

* First attempt at cheesing CF's one-loader problem - Max

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
