# CreateTogether 1.1.6⟶CreateTogether 1.1.7

## Added

* [RoadRunner](https://www.curseforge.com/minecraft/mc-mods/roadrunner)

## Updated

### [AppleSkin](https://www.curseforge.com/minecraft/mc-mods/appleskin) ([appleskin-forge-mc1.16.x-2.1.0.jar](https://www.curseforge.com/minecraft/mc-mods/appleskin/files/3395800)⟶[appleskin-forge-mc1.16.x-2.2.0.jar](https://www.curseforge.com/minecraft/mc-mods/appleskin/files/3512372))

#### [appleskin-forge-mc1.16.x-2.2.0.jar](https://www.curseforge.com/minecraft/mc-mods/appleskin/files/3512372)

* Fix crash when food's regeneration amplifier is huge ([#149](https://github.com/squeek502/AppleSkin/pull/149), thanks [@sagesse-cn](https://github.com/sagesse-cn))
* Fix potential infinite loop when calculating health restored by food ([#155](https://github.com/squeek502/AppleSkin/pull/155), thanks [@sagesse-cn](https://github.com/sagesse-cn))

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/appleskin/files/all)

### [Architectury API (Forge)](https://www.curseforge.com/minecraft/mc-mods/architectury-forge) ([[Forge 1.16.4/5] v1.20.29](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3415041)⟶[[Forge 1.16.4/5] v1.24.35](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3500014))

#### [[Forge 1.16.4/5] v1.24.35](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3500014)

Architectury v1.24.35 for 1.16.4/5

Updated at 2021-10-23 11:17.

[Click here for changelog](https://www.github.com/architectury/architectury/commits/1.16)

* Don't release non split packets, bump minor version because we didn't

#### [5 more entries](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/all)

### [Building Gadgets](https://www.curseforge.com/minecraft/mc-mods/building-gadgets) ([buildinggadgets-1.16.5-3.8.0.jar](https://www.curseforge.com/minecraft/mc-mods/building-gadgets/files/3205295)⟶[buildinggadgets-1.16.5-3.8.2.jar](https://www.curseforge.com/minecraft/mc-mods/building-gadgets/files/3498508))

#### [buildinggadgets-1.16.5-3.8.2.jar](https://www.curseforge.com/minecraft/mc-mods/building-gadgets/files/3498508)

[3.8.2 - 1.16.5] - 2021-10-21

Fixed

* Crashing issue due to race conditions
* An issue showing an incorrect value for the Destruction gadget not showing the correct value for area size
* Possible fix for effect blocks staying invisible

### [Chunk-Pregenerator](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator) ([Chunk Pregenerator-V1.16-3.1.0](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator/files/3419304)⟶[Chunk Pregenerator-V1.16-3.2.0](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator/files/3507658))

#### [Chunk Pregenerator-V1.16-3.2.0](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator/files/3507658)

Addressing a couple issues that were found.

Changelog:

Version 3.2.0:

-Fixed: WorldBorder prepare value is now calculated correctly.

-Removed: Pregenerator was doing duplicated work that could lag enough to lead to crashes.

-Changed: Pregenerator now 4x slowly unloads fully generated chunks to reduce strain on mcs saving system.

-Fixed: Preview Button was baldy aligned at More World Options screen.

-Fixed: Potential Crash after the pregeneration was finished.

-Fixed: Normal Gen would fill up the worldgen threadqueue so much that it wasn't able to provide for the game anymore. (Now on dedicated thread worker)

-Added: Some more information into the Log Spam.

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator/files/all)

### [Clumps](https://www.curseforge.com/minecraft/mc-mods/clumps) ([Clumps-6.0.0.25.jar](https://www.curseforge.com/minecraft/mc-mods/clumps/files/3348509)⟶[Clumps-6.0.0.27.jar](https://www.curseforge.com/minecraft/mc-mods/clumps/files/3481298))

#### [Clumps-6.0.0.27.jar](https://www.curseforge.com/minecraft/mc-mods/clumps/files/3481298)

Current version: 6.0.0.27

* [Fix water not moving orbs among other things. Close #84](https://github.com/jaredlll08/Clumps/commit/8d45918d7d95505d407ef2995cca3ffa8a2a1c14) - Jared - Mon Oct 4 18:08:59 2021
* [Include dependency definitions for Forge and Minecraft in mods.toml (#81)](https://github.com/jaredlll08/Clumps/commit/9263bbbacbfcdd1531c9b5d67710fcbd35b07966) - Griefed - Sat Oct 2 11:44:49 2021
* [Future proof Jenkinsfile](https://github.com/jaredlll08/Clumps/commit/b0d1c972f4a8da0d2b5c6c35654e0beaebb78977) - Jared - Sat Jun 12 03:53:16 2021
* [Fix published maven libs](https://github.com/jaredlll08/Clumps/commit/352a559e979c6a403f38cb9cc326229f432359d8) - Jared - Wed May 26 11:48:11 2021
* [Hopefully fix a null clumpedMap. Close #62](https://github.com/jaredlll08/Clumps/commit/2ef9b36854c18d2b0ef24a6077bdb191568f54e5) - Jared - Fri Apr 30 21:36:56 2021
* [update forge and the build.gradle](https://github.com/jaredlll08/Clumps/commit/fb6fe02c211bc21fc942fb07557f7b9d8e253557) - Jared - Fri Apr 30 21:36:34 2021
* [Rework how mending is applied](https://github.com/jaredlll08/Clumps/commit/87e9b53c60750a795dd68ee4b988aee3f88fd550) - Jared - Wed Apr 14 14:43:14 2021
* [mark mcmt as compatible for now](https://github.com/jaredlll08/Clumps/commit/1b2ea8c2abf459e4e9334fa032ee6b7b0ce6a37d) - Jared - Tue Apr 13 15:30:29 2021
* [Add discord webhook](https://github.com/jaredlll08/Clumps/commit/9ab3c9d11ad16040406f4cc672811c0dd3a056c9) - Jared - Tue Apr 13 15:27:55 2021
* [Fix mending Calculation. Thanks @TheNormMan! Fixes #60](https://github.com/jaredlll08/Clumps/commit/bbecec20f9fbc37511f050d02e05443c48b94de7) - Jared - Sat Apr 10 19:04:30 2021
* [Migrate to deferred register, safeRunWhenOn, add localization (#54)](https://github.com/jaredlll08/Clumps/commit/38896602c4081a862d25d2cbe0b648fd1d14f079) - Chloe Dawn - Tue Feb 16 04:37:37 2021
* [update to 1.16.5](https://github.com/jaredlll08/Clumps/commit/13bfd39f1be7670a5a72e53377e9c8923556df09) - Jared - Sun Feb 14 20:31:57 2021
* [Mark MCMT as incompatible](https://github.com/jaredlll08/Clumps/commit/902b3a49672c883eb1d5859ee7e7a0065b1ccba8) - Jared - Mon Feb 8 04:21:14 2021
* [Fixed Clumps and Mending close $49](https://github.com/jaredlll08/Clumps/commit/d3c3fb10543e12f15a7e6ae8c257a3971f6e6c06) - Jared - Wed Feb 3 22:02:56 2021
* [proper port to 1.16.4](https://github.com/jaredlll08/Clumps/commit/bd5b5c4cd7e0de5141e8f64fa8b39a2e7bc24faf) - Jared - Sun Dec 13 01:25:18 2020
* [Cleanup and Efficiency (#42)](https://github.com/jaredlll08/Clumps/commit/321e4bd8458ea144990daa4f1f460901cee9ff44) - ChampionAsh5357 - Sun Nov 1 23:40:27 2020
* [Implement XP orb events (#41)](https://github.com/jaredlll08/Clumps/commit/129d87d18a24972051fbb036b421e918dce700c3) - FalseHonesty - Sat Oct 3 22:25:05 2020
* [port to 1.16.3](https://github.com/jaredlll08/Clumps/commit/810f040c82d4ee818bd2cbae92a1caafbc2290a5) - Jared - Wed Sep 16 23:15:08 2020
* [1.16.2 3rd times the charm](https://github.com/jaredlll08/Clumps/commit/49fd7690a8d32d1134009670a0df750a88c37446) - Jared - Tue Aug 25 17:55:44 2020
* [fix mapping issue](https://github.com/jaredlll08/Clumps/commit/0fd50c1855ad7c20126d0382f3d32ff032825489) - Jared - Tue Aug 25 17:24:46 2020
* [Fixed xp not dropping in dims (1.16.1) Close #192](https://github.com/jaredlll08/Clumps/commit/8fc3d38208a9b9aa1f36e96b5dc95fce2e61a954) - Jared - Tue Aug 25 17:16:30 2020
* [orb improvements](https://github.com/jaredlll08/Clumps/commit/75899ddf5dcb03398bd491266e6c325b7d8e78c6) - Jared - Thu Aug 20 20:21:10 2020
* [re-fix clumps causing crashes close #35](https://github.com/jaredlll08/Clumps/commit/234a169d959f1aefb65151a4328f04e70d1c7cc4) - Jared - Sun Jul 19 21:03:52 2020
* [update version](https://github.com/jaredlll08/Clumps/commit/91b94baf80891a34d0ad95fc90f8ce05deb4cf3c) - Jared - Sat Jul 18 01:58:06 2020
* [update commit](https://github.com/jaredlll08/Clumps/commit/1228c2b85508b66799487f0b16600a35f4e34d25) - Jared - Sat Jul 18 01:54:03 2020

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/clumps/files/all)

### [Construction Wand](https://www.curseforge.com/minecraft/mc-mods/construction-wand) ([constructionwand-1.16.5-2.2.jar](https://www.curseforge.com/minecraft/mc-mods/construction-wand/files/3285196)⟶[constructionwand-1.16.5-2.4.jar](https://www.curseforge.com/minecraft/mc-mods/construction-wand/files/3499311))

#### [constructionwand-1.16.5-2.4.jar](https://www.curseforge.com/minecraft/mc-mods/construction-wand/files/3499311)

ConstructionWand 2.4

* Fixed wand overriding half slabs
* Fixed destruction wand removing blocks that aren't facing you

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/construction-wand/files/all)

### [Create](https://www.curseforge.com/minecraft/mc-mods/create) ([ Create 1.16.5 v0.3.2d](https://www.curseforge.com/minecraft/mc-mods/create/files/3419412)⟶[Create 1.16.5 v0.3.2f](https://www.curseforge.com/minecraft/mc-mods/create/files/3499718))

#### [Create 1.16.5 v0.3.2f](https://www.curseforge.com/minecraft/mc-mods/create/files/3499718)

Create 0.3.2f

for Minecraft 1.16.5

"Long time no hotfix"

Hotfix to 0.3.2e: - Fixed crash on server start; Fixed incorrect icon position in Toolbox Screen; Removed an obsolete recipe

Additions

* Added the Toolbox
* Added dyed variants of the Toolbox

Enhancements, Fixes

* Fixed Contraptions eternally stalling when loaded back from a temporarily stalled state
* The Wrench can now be used to shorten or divide Mechanical Belts
* Belt Connectors can now be used to extend or merge Mechanical Belts
* Fixed CTM item models disappearing after a ponder scene is opened
* Doors and Trapdoors on Contraptions can now be interacted with
* Moved obsidian movement from tag to config
* Connected Mechanical Crafters now strictly distribute added items from top to bottom, left to right
* Fixed smart pipe ponder scene no longer showing milk in the basin
* Fixed filter slot display issues with Forge's multi-layered item models
* Fixed Smart Pipes not able to be picked up with Wrench
* Fluid Pipes no longer have to be straight in order to be 'wrenched' into a strictly straight windowed pipe
* Stockpile Switches can now be used with Fluid Tanks
* Content Observers can now be used with Fluid Containers and Fluid Pipes
* Added the option to have held items not be consumed in deploying recipes
* Fixed Unbreakable items breaking when used as tool in deploying recipes
* Fixed pumps and valves not registering their stress impact properly after changing state
* Fixed belts not applying stress when created in certain orientations
* Schematic and Quill now creates Air entries in place of any "Structure Void" block
* Fixed a lighting issue for the belt item renderer
* Items on belts now stall under empty-handed Deployers targeting them
* Added a config option to prevent Create from placing fluid source blocks
* Added a config option to make mounted storage output-only
* Added config options for mechanical harvesters
* Added config option for the required windmill sails per RPM
* Added config option for hose pulleys to continue filling above-threshold pools
* Crafters no longer display item sprites vertically flipped
* Crafters now arrange overlapping items less randomly
* Chromatic Compound can now absorb light emitting blocks from belts & depots
* Mechanical Harvesters can now be used to gather Leaves
* Mechanical Harvesters can now be used to gather Weeping and Twisting Vines
* Fixed JEI integration of Basin recipes with multiple and/or stochastic outputs
* Fixed infinite fluid source deny-list being ignored
* Fixed idle blaze burners sending packets every tick
* Fixed placement indicator rendering behind the crosshair
* Fixed TiCon Casting via Spout
* Fixed fluid pipes getting stuck trying to waterlog non-solid blocks with fluid handling capabilities
* Fixed 3x3 compacting recipes marked as Shapeless able to be processed by a mixer
* Fixed Chute Particles not moving
* Fixed crash when using tree fertilizer on saplings from "Blue skies"

Localization

* Updates to pt_br.json by vyhi
* Updates to pl_pl.json by joker876

[(27 more lines)](https://www.curseforge.com/minecraft/mc-mods/create/files/3499718)

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/create/files/all)

### [Drawers Tooltip](https://www.curseforge.com/minecraft/mc-mods/drawers-tooltip) ([DrawersTooltip-1.16.2-2.1.0.jar](https://www.curseforge.com/minecraft/mc-mods/drawers-tooltip/files/3035686)⟶[DrawersTooltip-1.16.2-2.1.1.jar](https://www.curseforge.com/minecraft/mc-mods/drawers-tooltip/files/3491850))

#### [DrawersTooltip-1.16.2-2.1.1.jar](https://www.curseforge.com/minecraft/mc-mods/drawers-tooltip/files/3491850)

add Storage Drawers as dependency in mods.toml

### [Enigmatic Graves](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves) ([EnigmaticGraves-1.6.1.jar](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/3421782)⟶[EnigmaticGraves-1.6.5.jar](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/3507614))

#### [EnigmaticGraves-1.6.5.jar](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/3507614)

Fixed crashing on server startup

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/all)

### [FTB Chunks (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge) ([ftb-chunks-forge-1605.3.1-build.41.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3409573)⟶[ftb-chunks-forge-1605.3.2-build.79.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3509329))

#### [ftb-chunks-forge-1605.3.2-build.79.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3509329)

* AAAAA fixed yet another bug where on first load the chunks around player fail to load. Merged ReloadChunkTask and ReloadChunkFromLevelPacketTask into ChunkUpdateTask - LatvianModder

#### [16 more entries](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/all)

### [FTB Library (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge) ([ftb-library-forge-1605.3.1-build.58.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge/files/3415091)⟶[ftb-library-forge-1605.3.4-build.81.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge/files/3514173))

#### [ftb-library-forge-1605.3.4-build.81.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge/files/3514173)

* Merge branch 'dev' - LatvianModder
* Merge pull request #39 from Quezler/patch-1 - Kristiāns Micītis
* Offset the hat by 40 x instead of 40 y - Patrick 'Quezler' Mounier

#### [7 more entries](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge/files/all)

### [FTB Teams (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge) ([ftb-teams-forge-1605.2.1-build.20.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge/files/3409580)⟶[ftb-teams-forge-1605.2.3-build.38.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge/files/3492657))

#### [ftb-teams-forge-1605.2.3-build.38.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge/files/3492657)

* Added getExtraData() in KnownClientPlayer - LatvianModder

#### [4 more entries](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge/files/all)

### [FTB Ultimine (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge) ([ftb-ultimine-forge-1605.3.0-build.25.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/3409570)⟶[ftb-ultimine-forge-1605.3.1-build.42.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/3517169))

#### [ftb-ultimine-forge-1605.3.1-build.42.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/3517169)

* Merge remote-tracking branch 'origin/dev' into main - Max
* Fix server crash with tag config (Why is isValidResourceLocation client-side?) - Max

#### [5 more entries](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/all)

### [FerriteCore (Forge)](https://www.curseforge.com/minecraft/mc-mods/ferritecore) ([ferritecore-2.0.5-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ferritecore/files/3358428)⟶[ferritecore-2.1.0-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ferritecore/files/3485636))

#### [ferritecore-2.1.0-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ferritecore/files/3485636)

* New: Do not store NBT data for already loaded parts of partially loaded chunks, saves 80-90 MB on servers
* Add compatibility for environments using newer guava versions
* Improve performance of StateHolder#hasProperty

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/ferritecore/files/all)

### [Flywheel](https://www.curseforge.com/minecraft/mc-mods/flywheel) ([flywheel-1.16-0.2.3.jar](https://www.curseforge.com/minecraft/mc-mods/flywheel/files/3419392)⟶[flywheel-1.16-0.2.4.jar](https://www.curseforge.com/minecraft/mc-mods/flywheel/files/3459739))

#### [flywheel-1.16-0.2.4.jar](https://www.curseforge.com/minecraft/mc-mods/flywheel/files/3459739)

0.2.4:

Fixes

* Partially fix compatibility issues with sodium-forge

note: full compatibility is waiting on [https://github.com/spoorn/sodium-forge/pull/175](https://github.com/spoorn/sodium-forge/pull/175)

Technical/API

* Add separate xyz scaling function to TransformStack interface.

0.2.3:

Fixes

* Fix crash moving a deleted LightVolume

Technical/API

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

[(34 more lines)](https://www.curseforge.com/minecraft/mc-mods/flywheel/files/3459739)

### [Just Enough Items (JEI)](https://www.curseforge.com/minecraft/mc-mods/jei) ([jei-1.16.5-7.7.1.118.jar](https://www.curseforge.com/minecraft/mc-mods/jei/files/3414898)⟶[jei-1.16.5-7.7.1.130.jar](https://www.curseforge.com/minecraft/mc-mods/jei/files/3514175))

#### [Just Enough Items (JEI) 7.7.1](https://www.curseforge.com/minecraft/mc-mods/jei/files/3514175)

* [Add support to open the config screen with Configured mod (#2543)](https://github.com/mezz/JustEnoughItems/commit/5f4bbc0b281a260d21714874bbe64e4f14e5bfa9) - Sintinium
* [Fix key translations](https://github.com/mezz/JustEnoughItems/commit/d4be75036c201923c4d9164a7a203e95cf64eb86) - mezz
* [Fix #2525 Client config is not working](https://github.com/mezz/JustEnoughItems/commit/d36f2a36953b662aec9884e8e8d07d2bf6727a35) - mezz
* [Remove optional dependency on FTB Library, use the Configured mod](https://github.com/mezz/JustEnoughItems/commit/c01f6ee639de3cd4e1d7fcf53856d13678361597) - mezz
* [Add server config for disabling cheat mode](https://github.com/mezz/JustEnoughItems/commit/574bb250458f17dc0ae6045bfdff1d424b47e8b3) - mezz
* [Fix tooltip for disabling cheat mode when the hotkey is unbound](https://github.com/mezz/JustEnoughItems/commit/004de24e1bb3eccf688a18ca18f341aa7a65b0f1) - mezz
* [Fix #2459 Mouse clicks did not always unfocus the search bar](https://github.com/mezz/JustEnoughItems/commit/20ab83b1ccb25beaef30128eff96ef3d58cf6139) - mezz
* [Fix the compilation errors from using a patch from the 1.17 branch](https://github.com/mezz/JustEnoughItems/commit/a14cbd7ced11a9d6b2dd299cb2ae5ccb4e343e94) - mezz
* [Fix IRecipeCategory default isHandled to allow modded recipes to be handled by default](https://github.com/mezz/JustEnoughItems/commit/2c9921ed40bdcca6a20784544e6de9f216256e37) - mezz
* [Fix #2506. Skip adding unhandled recipes](https://github.com/mezz/JustEnoughItems/commit/eaeff62f3cfa0ab839032be1e078fb7a00b9b46b) - mezz
* [Fix #2468 Return a mutable list from RecipeManager methods for easier consumption](https://github.com/mezz/JustEnoughItems/commit/71508ad1701e64643e191e6fbff5281e72262393) - mezz
* [Clean up IngredientFilterTest](https://github.com/mezz/JustEnoughItems/commit/22ac76592fb29498837cf9aa263d87a3aa1ced0a) - mezz
* [Add basic tests for getAllIngredients](https://github.com/mezz/JustEnoughItems/commit/409a54a9c32aa2d9e93d1f079ad3dda7bf015c69) - mezz
* [Improved testing for ingredient search when adding/removing at runtime](https://github.com/mezz/JustEnoughItems/commit/edec2277159fe5341a91e0f442f744aaab700c66) - mezz

### [KubeJS (Forge)](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge) ([kubejs-forge-1605.3.15-build.80.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3425028)⟶[kubejs-forge-1605.3.18-build.154.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3516226))

#### [kubejs-forge-1605.3.18-build.154.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3516226)

* Merge branch 'dev' - LatvianModder
* Added persistentData in server, level, player and entity. You can use this to store per-world, per-dimension, or per-entity data persistantly even when world is closed. This data is only availble on server side. Changed a bunch of places to not use the old bad NBT parser - LatvianModder
* Fixed #213, network packets not sending data correctly - LatvianModder

#### [23 more entries](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/all)

### [Login Protection](https://www.curseforge.com/minecraft/mc-mods/login-protection) ([logprot-1.16-1.3.jar](https://www.curseforge.com/minecraft/mc-mods/login-protection/files/3038361)⟶[logprot-1.16-1.5.jar](https://www.curseforge.com/minecraft/mc-mods/login-protection/files/3497459))

#### [logprot-1.16-1.5.jar](https://www.curseforge.com/minecraft/mc-mods/login-protection/files/3497459)

v1.5: Better config defaults

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/login-protection/files/all)

### [PackMenu](https://www.curseforge.com/minecraft/mc-mods/packmenu) ([PackMenu-1.16.4-2.4.2.jar](https://www.curseforge.com/minecraft/mc-mods/packmenu/files/3292171)⟶[PackMenu-1.16.5-2.5.0.jar](https://www.curseforge.com/minecraft/mc-mods/packmenu/files/3475660))

#### [PackMenu-1.16.5-2.5.0.jar](https://www.curseforge.com/minecraft/mc-mods/packmenu/files/3475660)

[https://github.com/Shadows-of-Fire/PackMenu/blob/master/changelog.md](https://github.com/Shadows-of-Fire/PackMenu/blob/master/changelog.md)

### [Placebo](https://www.curseforge.com/minecraft/mc-mods/placebo) ([Placebo-1.16.4-4.5.0.jar](https://www.curseforge.com/minecraft/mc-mods/placebo/files/3331459)⟶[Placebo-1.16.5-4.6.0.jar](https://www.curseforge.com/minecraft/mc-mods/placebo/files/3437009))

#### [Placebo-1.16.5-4.6.0.jar](https://www.curseforge.com/minecraft/mc-mods/placebo/files/3437009)

[https://github.com/Shadows-of-Fire/Placebo/blob/1.16/changelog.md](https://github.com/Shadows-of-Fire/Placebo/blob/1.16/changelog.md)

### [Quark](https://www.curseforge.com/minecraft/mc-mods/quark) ([Quark-r2.4-316.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3394265)⟶[Quark-r2.4-319.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3490981))

#### [Quark-r2.4-319.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3490981)

* Fixed an incorrect mapping causing Experimental Shiba to crash the game when picking up a trident outside of a development environment

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/quark/files/all)

### [Rhino](https://www.curseforge.com/minecraft/mc-mods/rhino) ([rhino-1605.1.1-build.21.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3354586)⟶[rhino-forge-1605.1.5-build.73.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3516138))

#### [rhino-forge-1605.1.5-build.73.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3516138)

* Added .merge() in compound tag, clearML() and clearLL() in MapLike and ListLike - LatvianModder

#### [29 more entries](https://www.curseforge.com/minecraft/mc-mods/rhino/files/all)

### [Simply Backpacks](https://www.curseforge.com/minecraft/mc-mods/simply-backpacks) ([simplybackpacks-1.16.5-1.5.1-build.4.jar](https://www.curseforge.com/minecraft/mc-mods/simply-backpacks/files/3345102)⟶[simplybackpacks-1.16.5-1.5.2-build.8.jar](https://www.curseforge.com/minecraft/mc-mods/simply-backpacks/files/3479276))

#### [simplybackpacks-1.16.5-1.5.2-build.8.jar](https://www.curseforge.com/minecraft/mc-mods/simply-backpacks/files/3479276)

* Added the holds_items tag to the krates from the krate mod, as they can hold items with the shulker upgrade. - Flanks255
* Updated Forge. - Flanks255
* Added support for the Tombstone mod soulbound enchantment. - Flanks255
* Changed Soulbound detection to using Enchantment Tags. - Flanks255

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
