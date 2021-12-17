# CreateTogether 1.1.7⟶CreateTogether 1.1.8

## Updated

### [Architectury API (Forge)](https://www.curseforge.com/minecraft/mc-mods/architectury-forge) ([[Forge 1.16.4/5] v1.24.35](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3500014)⟶[[Forge 1.16.4/5] v1.26.39](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3563802))

#### [[Forge 1.16.4/5] v1.26.39](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3563802)

Architectury v1.26.39 for 1.16.4/5

Updated at 2021-12-12 17:32.

[Click here for changelog](https://www.github.com/architectury/architectury/commits/1.16)

* Fix #150

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/all)

### [Chunk-Pregenerator](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator) ([Chunk Pregenerator-V1.16-3.2.0](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator/files/3507658)⟶[Chunk Pregenerator-V1.16-3.2.1](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator/files/3534451))

#### [Chunk Pregenerator-V1.16-3.2.1](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator/files/3534451)

Small Patch addressing the most priority issues that came up.

Changelog:

Version 3.2.1:

* Added: ChunkPregenerator now enforces by default a 10 Minute ServerWatchdog time instead of the default 1 Minute time from vanilla. This just fixes a lot of crashes through lag because of very heavy modpacks. This can be disabled though it is not suggested since this is only applied to reduce crashes not "disable deadlock detection"
* Added: Lithium Detection. When lithium is found the Pregenerator disables certain features to make Lithium Compatible. This patch addresses my side of the Lithium Incompat. Lithium has now to patch their side to address the incompat. Right now it will be still crashing, but once they patch their side it wont crash anymore. (I could disable the crash on my side completely but then you would require 16GB of free ram on the start of the really large pregeneration. Maybe even more. It fixes a major memory leak in minecraft so i rather stay lithium incompatible if they dont address their bugs)

### [Cloth Config API (Forge)](https://www.curseforge.com/minecraft/mc-mods/cloth-config-forge) ([[Forge 1.16.4/5] v4.11.26](https://www.curseforge.com/minecraft/mc-mods/cloth-config-forge/files/3311352)⟶[[Forge 1.16.4/5] v4.13.49](https://www.curseforge.com/minecraft/mc-mods/cloth-config-forge/files/3559634))

#### [[Forge 1.16.4/5] v4.13.49](https://www.curseforge.com/minecraft/mc-mods/cloth-config-forge/files/3559634)

No changelog available.

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/cloth-config-forge/files/all)

### [Construction Wand](https://www.curseforge.com/minecraft/mc-mods/construction-wand) ([constructionwand-1.16.5-2.4.jar](https://www.curseforge.com/minecraft/mc-mods/construction-wand/files/3499311)⟶[constructionwand-1.16.5-2.6.jar](https://www.curseforge.com/minecraft/mc-mods/construction-wand/files/3562328))

#### [constructionwand-1.16.5-2.6.jar](https://www.curseforge.com/minecraft/mc-mods/construction-wand/files/3562328)

ConstructionWand 2.6

* Fixed [#47](https://github.com/Theta-Dev/ConstructionWand/issues/47) Crash when pressing E inside wand GUI

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/construction-wand/files/all)

### [CookieCore](https://www.curseforge.com/minecraft/mc-mods/cookiecore) ([1.16.2+ (3.0.2)](https://www.curseforge.com/minecraft/mc-mods/cookiecore/files/3158118)⟶[3.3.0 (for MC 1.16.5)](https://www.curseforge.com/minecraft/mc-mods/cookiecore/files/3524822))

#### [3.3.0 (for MC 1.16.5)](https://www.curseforge.com/minecraft/mc-mods/cookiecore/files/3524822)

Improve configuration library for Fundamental

### [Create](https://www.curseforge.com/minecraft/mc-mods/create) ([Create 1.16.5 v0.3.2f](https://www.curseforge.com/minecraft/mc-mods/create/files/3499718)⟶[Create 1.16.5 v0.3.2g](https://www.curseforge.com/minecraft/mc-mods/create/files/3536025))

#### [Create 1.16.5 v0.3.2g](https://www.curseforge.com/minecraft/mc-mods/create/files/3536025)

Create 0.3.2g

for Minecraft 1.16.5

Enhancements, Fixes

* Fixed Chutes spilling items when inserting into disconnected storage interfaces
* Blaze Burners can now be picked up using the Wrench
* Fixed Contraptions being affected by Weighted Ejectors
* Fixed press/deployer/spout failing to process an item when other items are processed simultaneously further down the belt
* Fixed piston/pulleys moving before their attached entity is loaded
* Fixed pipes spawning particles at connections between chunks
* Fixed toolbox deleting contained items when crafted with dye
* Fixed encased fluid pipes not updating flows when neighbouring blocks change
* Fixed fluid pipes not updating flows when adjacent block changes from fluid to block
* Fixed Crafters voiding any inserted items after being moved on a contraption
* Fixed Crafters crashing the game after being placed by a Schematicannon
* Fixed Mechanical Press head getting stuck in extended position when off-screened or when its basin changes
* A couple of two-ingredient recipes have been made shapeless
* Made toolbox recipes less confusing to navigate in JEI
* Improved piston/pulley contraption collision with blocks in the world
* Fixed pistons/pulley contraptions merging into world blocks when disassembling shortly after loaded in
* Toolbox radial can now be navigated using hotbar shortcuts
* Toolbox radial now steps back when right-clicked
* Toolbox radial now immediately opens the multi-toolbox view when right-clicking the central "unequip" button
* Fixed hidden slots visible in toolbox screen in some gui scales
* Toolbox sorting in the radial menu is now deterministic
* Fixed Toolboxes not always updating their inventory state to clients
* Shulker boxes can no longer be placed inside toolboxes
* Fixed potion fluids not displaying their full name in jei
* Fixed JEI showing all potion recipes when looking up a specific one
* Fixed belt-item speed and contraption sync being one tick off by default
* Added in-world toolbox dyeing
* Fixed toolbox handle not rendering with transparency
* Gantry Shafts can now be configured to have a stress impact
* Additional safety checks from crash-reports
* Recipes with an id suffixed "manualonly" are now ignored in auto-shaped, auto-shapeless and auto-cutting processing features
* Better visibility for low/half amounts of fluids in basins
* Added processingTime support to mixing recipes (defaults to 100)
* Fixed Basin recipes with fluid output not starting when targeted output inventory supports items only
* Fixed item extraction from create creating stacks of unstackable items when source inventory allows stacking them (e.g. Storage Drawers)
* Fixed pipes not initialising target fluid holders properly when the source is loaded in first
* Fixed Deployers not having a valid item capability when asked before their first tick
* Fixed Mechanical Crafting recipes able to be automated via packing
* Fixed fluid networks losing fluids when extracted amount is lower than a pumps transfer speed
* Fixed JEI plugin claiming that some occultism's ritual recipes work in a compacter

Localisation

* Added es_cl.json by Alonsinwhat
* Updates to de_de.json by DreiMu
* Updates to ko_kr.json by qkrehf2
* Updates to zh_cn.json by Demonese
* Updates to es_es.json by FrannDzs
* Updates to pt_br.json by vyhi

[(1 more line)](https://www.curseforge.com/minecraft/mc-mods/create/files/3536025)

### [Enigmatic Graves](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves) ([EnigmaticGraves-1.6.5.jar](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/3507614)⟶[EnigmaticGraves-1.7.1.jar](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/3517235))

#### [EnigmaticGraves-1.7.1.jar](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/3517235)

* Fixed dupe issue when using items that add new slots to the curio slots

### [FTB Chunks (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge) ([ftb-chunks-forge-1605.3.2-build.79.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3509329)⟶[ftb-chunks-forge-1605.3.2-build.83.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3538223))

#### [ftb-chunks-forge-1605.3.2-build.83.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3538223)

* Fixed crash with datagens - LatvianModder

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/all)

### [FTB Library (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge) ([ftb-library-forge-1605.3.4-build.81.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge/files/3514173)⟶[ftb-library-forge-1605.3.4-build.90.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge/files/3553840))

#### [ftb-library-forge-1605.3.4-build.90.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge/files/3553840)

No changelog available.

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/ftb-library-forge/files/all)

### [FTB Teams (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge) ([ftb-teams-forge-1605.2.3-build.38.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge/files/3492657)⟶[ftb-teams-forge-1605.2.3-build.40.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge/files/3535953))

#### [ftb-teams-forge-1605.2.3-build.40.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-teams-forge/files/3535953)

* Merge pull request #22 from astei/patch-1 - Max
* Fix argument type namespace for proxy compatibility - Andrew Steinborn

### [FTB Ultimine (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge) ([ftb-ultimine-forge-1605.3.1-build.42.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/3517169)⟶[ftb-ultimine-forge-1605.3.1-build.45.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/3520756))

#### [ftb-ultimine-forge-1605.3.1-build.45.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/3520756)

* Merge branch 'dev' into main - Max
* Fix config paths being printed as absolute - Max

### [FastFurnace](https://www.curseforge.com/minecraft/mc-mods/fastfurnace) ([FastFurnace-1.16.4-4.4.0.jar](https://www.curseforge.com/minecraft/mc-mods/fastfurnace/files/3172796)⟶[FastFurnace-1.16.5-4.5.0.jar](https://www.curseforge.com/minecraft/mc-mods/fastfurnace/files/3531342))

#### [FastFurnace-1.16.5-4.5.0.jar](https://www.curseforge.com/minecraft/mc-mods/fastfurnace/files/3531342)

[https://github.com/Shadows-of-Fire/FastFurnace/blob/1.16/changelog.md](https://github.com/Shadows-of-Fire/FastFurnace/blob/1.16/changelog.md)

### [FastWorkbench](https://www.curseforge.com/minecraft/mc-mods/fastworkbench) ([FastWorkbench-1.16.4-4.5.1.jar](https://www.curseforge.com/minecraft/mc-mods/fastworkbench/files/3245271)⟶[FastWorkbench-1.16.5-4.6.0.jar](https://www.curseforge.com/minecraft/mc-mods/fastworkbench/files/3531308))

#### [FastWorkbench-1.16.5-4.6.0.jar](https://www.curseforge.com/minecraft/mc-mods/fastworkbench/files/3531308)

[https://github.com/Shadows-of-Fire/FastWorkbench/blob/1.16/changelog.md](https://github.com/Shadows-of-Fire/FastWorkbench/blob/1.16/changelog.md)

### [Flywheel](https://www.curseforge.com/minecraft/mc-mods/flywheel) ([flywheel-1.16-0.2.4.jar](https://www.curseforge.com/minecraft/mc-mods/flywheel/files/3459739)⟶[flywheel-1.16-0.2.5.jar](https://www.curseforge.com/minecraft/mc-mods/flywheel/files/3535459))

#### [flywheel-1.16-0.2.5.jar](https://www.curseforge.com/minecraft/mc-mods/flywheel/files/3535459)

0.2.5:

Fixes

* Fix memory leak when many worlds are loaded
* Remove micro optimization causing more trouble than its worth

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

[(38 more lines)](https://www.curseforge.com/minecraft/mc-mods/flywheel/files/3535459)

### [Just Enough Items (JEI)](https://www.curseforge.com/minecraft/mc-mods/jei) ([jei-1.16.5-7.7.1.130.jar](https://www.curseforge.com/minecraft/mc-mods/jei/files/3514175)⟶[jei-1.16.5-7.7.1.138.jar](https://www.curseforge.com/minecraft/mc-mods/jei/files/3564654))

#### [Just Enough Items (JEI) 7.7.1](https://www.curseforge.com/minecraft/mc-mods/jei/files/3564654)

* [Remove unsafe concurrency in vanilla plugin's getCraftingRecipes](https://github.com/mezz/JustEnoughItems/commit/848fb75d53ea8b3b583e0f8c05fa1f6b8b4b3940) - mezz
* # src/main/java/mezz/jei/plugins/vanilla/crafting/VanillaRecipes.java
* [Fix #2337, focus the search bar on right-click](https://github.com/mezz/JustEnoughItems/commit/6baf8947c58201509277228d365fa7c10effdc19) - mezz
* [Fix #2563: Clicking ingredients in displayed recipes does not work](https://github.com/mezz/JustEnoughItems/commit/7d4c6e54e4bf061031c436ce6a37f33eb68258a4) - mezz
* [Fix #2352 Improve click handling and dragging](https://github.com/mezz/JustEnoughItems/commit/50256d1371849c89a789828f3fc960b6b030c589) - mezz
* [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/149ed241ec8a2d5f31874c21253e26612e0d84bd) - mezz
* [Fix #2555 Some client configs are not loading](https://github.com/mezz/JustEnoughItems/commit/114cee103f411ac1e42ca4223922d8c3cdb0c6b1) - mezz
* [Fix #2253, support removing special recipes by using datapacks](https://github.com/mezz/JustEnoughItems/commit/b1a6cd17fba8679948bdeeb0d6bc4ad5ef432d2e) - mezz
* [Update of Polish translation (version 1.16) (#2550)](https://github.com/mezz/JustEnoughItems/commit/7d9c49b07015d4429f8a87af7747d76198ccf36d) - Greg-21
* [minor cleanup](https://github.com/mezz/JustEnoughItems/commit/fd8533c3009fe5453951f76d9590ebc5b5eaa649) - mezz

### [KubeJS (Forge)](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge) ([kubejs-forge-1605.3.18-build.154.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3516226)⟶[kubejs-forge-1605.3.19-build.229.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3552913))

#### [kubejs-forge-1605.3.19-build.229.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3552913)

* Merge branch '1.16/dev' into 1.16/main - Max
* 🔥 Remove default durability from ToolItemType and ArmorItemType (#206) - Max
* 🐛 Fix ambiguous method call on BlockBuilder#texture - Max

#### [17 more entries](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/all)

### [More Overlays Updated](https://www.curseforge.com/minecraft/mc-mods/more-overlays-updated) ([[1.16.5] MoreOverlays 1.18.15](https://www.curseforge.com/minecraft/mc-mods/more-overlays-updated/files/3395133)⟶[[1.16.5] MoreOverlays 1.18.17](https://www.curseforge.com/minecraft/mc-mods/more-overlays-updated/files/3556279))

#### [[1.16.5] MoreOverlays 1.18.17](https://www.curseforge.com/minecraft/mc-mods/more-overlays-updated/files/3556279)

* Fixed view bobbing issue with Optifine ([#15](https://github.com/r8420/MoreOverlays-1.15/issues/15))

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/more-overlays-updated/files/all)

### [Placebo](https://www.curseforge.com/minecraft/mc-mods/placebo) ([Placebo-1.16.5-4.6.0.jar](https://www.curseforge.com/minecraft/mc-mods/placebo/files/3437009)⟶[Placebo-1.16.5-4.6.1.jar](https://www.curseforge.com/minecraft/mc-mods/placebo/files/3536806))

#### [Placebo-1.16.5-4.6.1.jar](https://www.curseforge.com/minecraft/mc-mods/placebo/files/3536806)

[https://github.com/Shadows-of-Fire/Placebo/blob/1.16/changelog.md](https://github.com/Shadows-of-Fire/Placebo/blob/1.16/changelog.md)

### [Quark](https://www.curseforge.com/minecraft/mc-mods/quark) ([Quark-r2.4-319.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3490981)⟶[Quark-r2.4-321.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3538744))

#### [Quark-r2.4-321.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3538744)

* Fixed server crash from 320

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/quark/files/all)

### [Refined Storage](https://www.curseforge.com/minecraft/mc-mods/refined-storage) ([Refined Storage 1.9.15](https://www.curseforge.com/minecraft/mc-mods/refined-storage/files/3400575)⟶[Refined Storage 1.9.16](https://www.curseforge.com/minecraft/mc-mods/refined-storage/files/3527504))

#### [Refined Storage 1.9.16](https://www.curseforge.com/minecraft/mc-mods/refined-storage/files/3527504)

* Added Covers for all cable types! (Buuz135)
* Improved JEI integration to pick the best option when transferring items (Darkere)
* Fixed an issue where too many items in a grid would kick the player (Darkere)
* Fixed an issue where the portable grid does not open from Inventory anymore after some use (Darkere)
* Fixed craftable view in grids not showing items that were already in storage (BlueAgent)
* Fixed Wireless Crafting Monitor not working as Curio (Darkere)
* Fixed wrong slot being locked in some cases when opening Wireless Item (Darkere)
* Slightly sped up External Storage item look up (necauqua)
* Fixed extraction from Storage Monitor not respecting maximum stack size (Darkere)
* Added Polish translation (joker876)
* Added Italian translation (maicol07)
* Addons can now override how Crafters insert items (Darkere)

### [Rhino](https://www.curseforge.com/minecraft/mc-mods/rhino) ([rhino-forge-1605.1.5-build.73.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3516138)⟶[rhino-forge-1605.1.5-build.75.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3525704))

#### [rhino-forge-1605.1.5-build.75.jar](https://www.curseforge.com/minecraft/mc-mods/rhino/files/3525704)

* Fix incompatibility with @overwrite on @RemapForJS mixins - Max

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/rhino/files/all)

### [Simple Magnets](https://www.curseforge.com/minecraft/mc-mods/simple-magnets) ([simplemagnets-1.1.2-mc1.16.5](https://www.curseforge.com/minecraft/mc-mods/simple-magnets/files/3239732)⟶[simplemagnets-1.1.3-mc1.16](https://www.curseforge.com/minecraft/mc-mods/simple-magnets/files/3561743))

#### [simplemagnets-1.1.3-mc1.16](https://www.curseforge.com/minecraft/mc-mods/simple-magnets/files/3561743)

* Added a creative tab for Simple Magnet's items
* Improved the demagnetization coil effective area highlighting
* Improved tooltip colors
* Items will now be added to the players inventory when using ItemPhysic
* Fixed a visual bug where it looks like items within a demagnetization coil's area are teleported to the player

### [Simply Backpacks](https://www.curseforge.com/minecraft/mc-mods/simply-backpacks) ([simplybackpacks-1.16.5-1.5.2-build.8.jar](https://www.curseforge.com/minecraft/mc-mods/simply-backpacks/files/3479276)⟶[simplybackpacks-1.16.5-2.0.1-build.27.jar](https://www.curseforge.com/minecraft/mc-mods/simply-backpacks/files/3566909))

#### [simplybackpacks-1.16.5-2.0.1-build.27.jar](https://www.curseforge.com/minecraft/mc-mods/simply-backpacks/files/3566909)

* Fix rare crash in migrating backpacks from old style to new style. - Flanks255

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/simply-backpacks/files/all)

### [SuperMartijn642's Core Lib](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib) ([supermartijn642corelib-1.0.12-mc1.16.5](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files/3413422)⟶[supermartijn642corelib-1.0.15-mc1.16.5](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files/3543827))

#### [supermartijn642corelib-1.0.15-mc1.16.5](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files/3543827)

* Added RenderWorldEvent which fires before depth data is cleared when using the fabulous graphics settings

#### [7 more entries](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files/all)

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
