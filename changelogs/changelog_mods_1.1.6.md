# CreateTogether 1.1.5⟶CreateTogether 1.1.6

## Updated

### [Architectury API (Forge)](https://www.curseforge.com/minecraft/mc-mods/architectury-forge) ([[Forge 1.16.4/5] v1.20.28](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3385660)⟶[[Forge 1.16.4/5] v1.20.29](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3415041))

#### [[Forge 1.16.4/5] v1.20.29](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3415041)

Architectury v1.20.29 for 1.16.4/5

Updated at 2021-08-06 09:25.

[Click here for changelog](https://www.github.com/architectury/architectury/commits/1.16)

* Update to architectury plugin 3.3

### [Chunk-Pregenerator](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator) ([Chunk Pregenerator-V1.16-3.0.5](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator/files/3237965)⟶[Chunk Pregenerator-V1.16-3.1.0](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator/files/3419304))

#### [Chunk Pregenerator-V1.16-3.1.0](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator/files/3419304)

Major Chunk Pregenerator patches.

Reworked Pregenerator logic to fix issues that were reported.

Changelog:

Version 3.1.0:

* Fixed: Gui Commands can now set the Z Offset and actually make use of it.
* Changed: Retrogen generators are now sorted by Mod & Name (first by modname and then by name with their mod)
* Changed: Selecting a Retrogenerator with shift will enable/disable all of them.
* Fixed: Retrogening no longer crashes because the actual required world space is loaded.
* Removed: Aggressive Pregeneration Config got removed and is now Enforced since its more useful.
* Fixed: Light Enginer worker now processes Region Files in the same order as Terrain Engine Worker. (Light engine did random order of what terrain finished)
* Changed: Light Engine now only processes 1 region file at once. This slows it down a tiny bit but not by much.
* Added: If the WorldGenerator gets stuck by any reason the Pregenerator now interrupts the worldgenerator and restarts it. Not 100% reliable but if the worldgenerator just needs a restart that will fix 90% of the issues.
* Fixed: Prepare Process now calculates all numbers correct.
* Added: Config for disabling Special Command Arguments removing the requirements for the Client by Default. (Can be enabled if wanted but requires a server restart or command reload)
* Added: (Disabled by default) WorldGenerator hack that is basically enabling Multithreaded WorldGeneration and allows to use more cores. Disabled by default because its crash potential is deemed to high for to be enabled by default. Its perfectly save to use in terms of "Not causing corruption" its just that some worldgeneration seeds still crash with this.
* Fixed: Reported bugs and maybe a couple things i dont remember out of the head. (it was a long development cycle)

### [Create](https://www.curseforge.com/minecraft/mc-mods/create) ([Create 1.16.5 v0.3.2b](https://www.curseforge.com/minecraft/mc-mods/create/files/3386319)⟶[ Create 1.16.5 v0.3.2d](https://www.curseforge.com/minecraft/mc-mods/create/files/3419412))

#### [ Create 1.16.5 v0.3.2d](https://www.curseforge.com/minecraft/mc-mods/create/files/3419412)

Create 0.3.2d

for Minecraft 1.16.5

"It keeps getting better"

* Minimum required Flywheel version raised to 0.2.3

Enhancements, Fixes

* Fixed 3x3 compacting recipes marked as Shapeless able to be processed by a mixer
* Fixed Chute Particles not moving
* Fixed Chutes pulling from inventories causing major framerate drops
* Fixed Chutes sending update packets when idling
* Added a max range for filter slot rendering of blocks
* Added a search box to config screens
* Added a new screen that gives easier access to other mod's configs
* Fixed Auto-Compacting picking up special gated recipes from the mod Occultism
* Fixed ammo-specific fire damage not dropping cooked drops from killed entities
* Fixed Schematicannons not visually aiming toward current block trajectory
* Fixed placed Schematics using smaller boundaries than the original
* Added the option to enable/disable placing air blocks with instant creative schematic printing
* Added safety check for Missing/Migrated filter attributes
* Added safety check for Crushing wheels near unloaded blocks
* Added safety check for instant-printing an invalid Schematics
* Fixed a crash when contraptions stop
* Fixed Crafting Blueprints not able to be placed
* Fixed goggle overlay fading into a solid colour when its custom alpha is 0
* Fixed crash rendering saws

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/create/files/all)

### [Enigmatic Graves](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves) ([EnigmaticGraves-1.5.1.jar](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/3402632)⟶[EnigmaticGraves-1.6.1.jar](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/3421782))

#### [EnigmaticGraves-1.6.1.jar](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/3421782)

* Hot-fix server crash

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/all)

### [FTB Chunks (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge) ([ftb-chunks-forge-1605.3.1-build.36.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3401679)⟶[ftb-chunks-forge-1605.3.1-build.41.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3409573))

#### [ftb-chunks-forge-1605.3.1-build.41.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3409573)

* Release. This is a major update that may break your worlds! If you are a pack dev, consider not updating if you use ancient release versions - LatvianModder

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/all)

### [FTB Library (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge) ([ftb-library-forge-1605.3.1-build.48.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge/files/3373833)⟶[ftb-library-forge-1605.3.1-build.58.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge/files/3415091))

#### [ftb-library-forge-1605.3.1-build.58.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge/files/3415091)

* Try out experimental "fix" for item search thread issue - Max

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge/files/all)

### [FTB Teams (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge) ([ftb-teams-forge-1605.2.1-build.17.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge/files/3373835)⟶[ftb-teams-forge-1605.2.1-build.20.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge/files/3409580))

#### [ftb-teams-forge-1605.2.1-build.20.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge/files/3409580)

* Release. This is a major update that may break your worlds! If you are a pack dev, consider not updating if you use ancient release versions - LatvianModder
* Update dependencies so userdev can launch - Max
* Add "settings" and "settings_for" commands for party teams (#18) - Max

### [FTB Ultimine (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge) ([ftb-ultimine-forge-1605.3.0-build.21.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/3395067)⟶[ftb-ultimine-forge-1605.3.0-build.25.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/3409570))

#### [ftb-ultimine-forge-1605.3.0-build.25.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/3409570)

* Merge branch 'dev' into main - LatvianModder
* Release. This is a major update that may break your worlds! If you are a pack dev, consider not updating if you use ancient release versions - LatvianModder

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/all)

### [Flywheel](https://www.curseforge.com/minecraft/mc-mods/flywheel) ([flywheel-1.16-0.1.1.jar](https://www.curseforge.com/minecraft/mc-mods/flywheel/files/3389159)⟶[flywheel-1.16-0.2.3.jar](https://www.curseforge.com/minecraft/mc-mods/flywheel/files/3419392))

#### [flywheel-1.16-0.2.3.jar](https://www.curseforge.com/minecraft/mc-mods/flywheel/files/3419392)

0.2.3:

Technical/API:

* Alter BeginFrameEvent to enable compatibility with optifine shadows

0.2.2:

Fixes

* Fix ConcurrentModificationException crash
* Fix NullPointer rendering create contraptions on older graphics cards
* Fix crash triggered when moving large distances in a single frame

0.2.1:

Fixes

* Potential fix for many issues caused by optimized chunk accesses

New

* Added config+command to disable chunk access optimization

0.2.0:

New

* Flywheel driven shulker box rendering
* Optimize chunk accesses by caching previous result
* Further optimize flywheel rendered objects through parallel updates

Changes

* Distant objects are update throttled according to the sequence of prime numbers, smoothing out updates
* Rename normalOverlay to debugNormals, make naming consistent across command and config

Fixes

* Fix issue causing modded banner patterns to all have missing textures

Technical/API

* Reorganize, simplify, and document everything in the MaterialManager tree
* MaterialManagers associate RenderStates with MaterialGroups
* Proper support for rendering in different layers (SOLID, CUTOUT, and TRANSPARENT)
* New methods in MaterialManager to accommodate these changes
* Deprecate old functions in MaterialManager in favor of new ones using MaterialGroups
* InstanceDatas can be transferred to other Instancers via "instance stealing"
* Abstraction for models, IModel
* Easier to use, and gives Flywheel more freedom to optimize
* Buffered models directly consume IModels
* Added BlockModel, renders a single block
* Added WorldModel, renders many blocks given a world instance
* Cuboids can be inverted across Y and Z, used by many vanilla models for some reason
* TransformStack scaling
* VecBuffer coloring
* Add more information to RenderLayerEvent and BeginFrameEvent

0.1.1:

New

* Flywheel driven chest and bell rendering, ~20x performance improvement in contrived cases

Fixes

* Fix crash rendering breaking overlay after reloading resource packs

Technical/API

* Deprecate instance registration functions in favor of builders
* Refactor breaking overlay renderer to be cleaner and more contained
* Move per-world material managers out of WorldContext into InstancedRenderDispatcher
* Add helper for getting information about texture atlases
* Add more debug information for shader loading

[(26 more lines)](https://www.curseforge.com/minecraft/mc-mods/flywheel/files/3419392)

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/flywheel/files/all)

### [Just Enough Items (JEI)](https://www.curseforge.com/minecraft/mc-mods/jei) ([jei-1.16.5-7.7.1.116.jar](https://www.curseforge.com/minecraft/mc-mods/jei/files/3401260)⟶[jei-1.16.5-7.7.1.118.jar](https://www.curseforge.com/minecraft/mc-mods/jei/files/3414898))

#### [Just Enough Items (JEI) 7.7.1](https://www.curseforge.com/minecraft/mc-mods/jei/files/3414898)

* [fix status badge version (#2441)](https://github.com/mezz/JustEnoughItems/commit/7273fdb801d1a74c04fc42ce20838467d2d9a0c4) - Minecraftschurli
* [Fix some minor Deprecation issues (#2428)](https://github.com/mezz/JustEnoughItems/commit/6113e26a53dfddf7d1ddd00981aca88564682313) - Sara Freimer

### [KubeJS (Forge)](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge) ([kubejs-forge-1605.3.13-build.45.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3398140)⟶[kubejs-forge-1605.3.15-build.80.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3425028))

#### [kubejs-forge-1605.3.15-build.80.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3425028)

* Merge branch 'dev' into main - LatvianModder
* Fixed nbt not working in Item.of() as 2nd argument - LatvianModder

#### [8 more entries](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/all)

### [KubeJS Create](https://www.curseforge.com/minecraft/mc-mods/kubejs-create) ([kubejs-create-1605.1.2-build.3.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-create/files/3398164)⟶[kubejs-create-1605.1.2-build.7.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-create/files/3407451))

#### [kubejs-create-1605.1.2-build.7.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-create/files/3407451)

* Added SequencedAssemblyItemType - LatvianModder
* Add sequenced assembly item type - Max

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/kubejs-create/files/all)

### [SuperMartijn642's Config Lib](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-config-lib) ([supermartijn642configlib-1.0.8-mc1.16](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-config-lib/files/3357667)⟶[supermartijn642configlib-1.0.9-mc1.16](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-config-lib/files/3413938))

#### [supermartijn642configlib-1.0.9-mc1.16](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-config-lib/files/3413938)

* Fixed a vulnerability when handling received config values

### [SuperMartijn642's Core Lib](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib) ([supermartijn642corelib-1.0.10a-mc1.16.5](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files/3390753)⟶[supermartijn642corelib-1.0.12-mc1.16.5](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files/3413422))

#### [supermartijn642corelib-1.0.12-mc1.16.5](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files/3413422)

* `Energy#formatEnergy` now uses Minecraft's selected language

#### [4 more entries](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files/all)

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
