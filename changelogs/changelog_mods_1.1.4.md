# CreateTogether 1.1.3⟶CreateTogether 1.1.4

## Added

* [Entity Culling](https://www.curseforge.com/minecraft/mc-mods/entity-culling)
* [Flywheel](https://www.curseforge.com/minecraft/mc-mods/flywheel)

## Updated

### [AppleSkin](https://www.curseforge.com/minecraft/mc-mods/appleskin) ([appleskin-forge-mc1.16.x-2.0.0.jar](https://www.curseforge.com/minecraft/mc-mods/appleskin/files/3358019)⟶[appleskin-forge-mc1.16.x-2.1.0.jar](https://www.curseforge.com/minecraft/mc-mods/appleskin/files/3395800))

#### [appleskin-forge-mc1.16.x-2.1.0.jar](https://www.curseforge.com/minecraft/mc-mods/appleskin/files/3395800)

* Fix display issues for food with no hunger/saturation ([#122](https://github.com/squeek502/AppleSkin/pull/122), thanks [@sagesse-cn](https://github.com/sagesse-cn))
* Make flashing food values not show up when the player can't eat the food they're holding ([#124](https://github.com/squeek502/AppleSkin/pull/124), thanks [@sagesse-cn](https://github.com/sagesse-cn))
* Draw hunger/saturation text in tooltip as grey to match normal tooltip text
* Fix some config settings controlling more than they should (like SHOW_FOOD_VALUES_OVERLAY controlling health overlay rendering)
* Fix crash when health/absorption is infinite

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/appleskin/files/all)

### [Architectury API (Forge)](https://www.curseforge.com/minecraft/mc-mods/architectury-forge) ([[Forge 1.16.4/5] v1.19.27](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3375943)⟶[[Forge 1.16.4/5] v1.20.28](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3385660))

#### [[Forge 1.16.4/5] v1.20.28](https://www.curseforge.com/minecraft/mc-mods/architectury-forge/files/3385660)

Architectury v1.20.28 for 1.16.4/5

Updated at 2021-07-12 04:04.

[Click here for changelog](https://www.github.com/architectury/architectury/commits/1.16)

* Added SimpleNetworkManager (#120)

### [Create](https://www.curseforge.com/minecraft/mc-mods/create) ([Create 1.16.4+ v0.3.1c](https://www.curseforge.com/minecraft/mc-mods/create/files/3278516)⟶[Create 1.16.5 v0.3.2b](https://www.curseforge.com/minecraft/mc-mods/create/files/3386319))

#### [Create 1.16.5 v0.3.2b](https://www.curseforge.com/minecraft/mc-mods/create/files/3386319)

Create 0.3.2b

for Minecraft 1.16.5

"Ever-tuning"

Enhancements, Fixes

* When a Lectern Controller that a player is using is broken, they are no longer prevented from using any other Lectern Controllers
* Fixed issues when activating a Lectern Controller while holding another Linked Controller
* Forced updated stress values to apply to existing worlds
* Added Create's panorama as a background for the config ui when opened from the main menu
* Fixed panoramas moving at a inconsistent speed
* Fixed blocks not updating their neighbors when being assembled into a contraption
* Fixed Stockpile Switch not updating its redstone output when its signal is inverted
* Reduced lag caused by many active nearby soul particles
* The Wither's shield is now immune to potato projectiles
* Fixed potato projectile potion effect weirdness
* Golden Apple potato projectiles can now cure Zombie Villagers
* Potato Recovery will no longer drop Golden Apples that successfully hit an entity
* Copper backtanks can no longer accumulate air pressure when waterlogged
* Copper backtanks now emit a comparator output
* Improved the odds to succeed of existing sequenced assembly recipes
* Removed id prefix requirement for ponder and seq. assembly tooltips

Localization

* ko_kr updated thanks to qkrehf2

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/create/files/all)

### [Enigmatic Graves](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves) ([EnigmaticGraves-1.3.jar](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/3378499)⟶[EnigmaticGraves-1.4.2.jar](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/3388869))

#### [EnigmaticGraves-1.4.2.jar](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/3388869)

Fixed command incompatibilities between client and server.  Added `list` command to view the grave entries for a player.

Added some logging to help identify future problems better.

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/enigmatic-graves/files/all)

### [FTB Chunks (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge) ([ftb-chunks-forge-1605.3.1-build.24.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3379733)⟶[ftb-chunks-forge-1605.3.1-build.34.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3397049))

#### [ftb-chunks-forge-1605.3.1-build.34.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/3397049)

* Fixed crash on dedicated servers - LatvianModder
* Added ftbchunks:rightclickwhitelist tag, rewrote protection handling, should fix no_wilderness bug - LatvianModder

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/ftb-chunks-forge/files/all)

### [FTB Ultimine (Forge)](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge) ([ftb-ultimine-forge-1605.2.2-build.4.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/3337104)⟶[ftb-ultimine-forge-1605.3.0-build.21.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/3395067))

#### [ftb-ultimine-forge-1605.3.0-build.21.jar](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/3395067)

* Merge branch 'dev' - Max
* Add Ultiminer Trinket texture (Thanks Rid!) - Max
* Add Tag-based block matcher to merge blocks based on user-defined tags - Max
* Yo dawg, I heard you like Nord... so we put some Nord inside of your Nord - Max
* Fine, Gradle. No more sources jar for you - Max
* Remove dummy fabric.mod.json to make Gradle... happier? - Max
* Add AW to common to hopefully make Gradle happy - Max
* Improve "active" tooltip - Max
* Add Lost Trinkets integration, migrate back to AT/AW - Max

#### [2 more entries](https://www.curseforge.com/minecraft/mc-mods/ftb-ultimine-forge/files/all)

### [FerriteCore (Forge)](https://www.curseforge.com/minecraft/mc-mods/ferritecore) ([ferritecore-2.0.4-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ferritecore/files/3272785)⟶[ferritecore-2.0.5-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ferritecore/files/3358428))

#### [ferritecore-2.0.5-forge.jar](https://www.curseforge.com/minecraft/mc-mods/ferritecore/files/3358428)

* Fix vague error messages when accessing invalid block properties
* Add a logo
* Add option to populate the neighbor table with a FastMap-backed table
* This slightly increases memory usage and is only required when mods access this table directly, so it is disabled by default

### [Just Enough Items (JEI)](https://www.curseforge.com/minecraft/mc-mods/jei) ([jei-1.16.5-7.7.0.107.jar](https://www.curseforge.com/minecraft/mc-mods/jei/files/3373521)⟶[jei-1.16.5-7.7.1.111.jar](https://www.curseforge.com/minecraft/mc-mods/jei/files/3397912))

#### [Just Enough Items (JEI) 7.7.1](https://www.curseforge.com/minecraft/mc-mods/jei/files/3397912)

* [Update ko_kr.json (#2420)](https://github.com/mezz/JustEnoughItems/commit/279be504cafbfe187ccf0509b5ce568e0038370d) - E. Kim
* [remove unused imports](https://github.com/mezz/JustEnoughItems/commit/55f694f822883b909649d3f2698665257f7736d5) - mezz
* [Avoid using parallelStream unless it turns out to be necessary for performance](https://github.com/mezz/JustEnoughItems/commit/0b79c3c54af109ee73b0f26043218c91cfd42fac) - mezz
* [Unify recipe category hiding logic, expose methods to the API to get hidden categories](https://github.com/mezz/JustEnoughItems/commit/7413f0c6d1a3eee2582a60ad757c50af20e5e8ed) - mezz

### [KubeJS (Forge)](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge) ([kubejs-forge-1605.3.11-build.31.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3364266)⟶[kubejs-forge-1605.3.13-build.45.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3398140))

#### [kubejs-forge-1605.3.13-build.45.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/3398140)

* Merge branch 'dev' into main - LatvianModder
* Added recipe.dontAdd() - LatvianModder

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/kubejs-forge/files/all)

### [KubeJS Create](https://www.curseforge.com/minecraft/mc-mods/kubejs-create) ([kubejs-create-1604.1.0.4.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-create/files/3169448)⟶[kubejs-create-1605.1.2-build.3.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-create/files/3398164))

#### [kubejs-create-1605.1.2-build.3.jar](https://www.curseforge.com/minecraft/mc-mods/kubejs-create/files/3398164)

* Added Sequenced Assembly recipe support - LatvianModder

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/kubejs-create/files/all)

### [More Overlays Updated](https://www.curseforge.com/minecraft/mc-mods/more-overlays-updated) ([ [1.16.5] MoreOverlays 1.18.14](https://www.curseforge.com/minecraft/mc-mods/more-overlays-updated/files/3349183)⟶[[1.16.5] MoreOverlays 1.18.15](https://www.curseforge.com/minecraft/mc-mods/more-overlays-updated/files/3395133))

#### [[1.16.5] MoreOverlays 1.18.15](https://www.curseforge.com/minecraft/mc-mods/more-overlays-updated/files/3395133)

Before this version it was not possible to check for mob spawns on blocks above the player in third person mode. This has been fixed in this version.

Previous versions:

### [Quark](https://www.curseforge.com/minecraft/mc-mods/quark) ([Quark-r2.4-314.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3366626)⟶[Quark-r2.4-316.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3394265))

#### [Quark-r2.4-316.jar](https://www.curseforge.com/minecraft/mc-mods/quark/files/3394265)

* Added backported Deepslate and Smooth Basalt
* Added the ability to convert any wooden chest into a vanilla chest
* Fixed Enchanted Books with enchantments over the limit being unusable
* Fixed incorrect padding on tooltips for items that have attributes
* Fixed Matrix Enchanting Table not appearing in JEI
* Fixed some dev files being left behind causing the filesize to be bigger than needed

#### [1 more entry](https://www.curseforge.com/minecraft/mc-mods/quark/files/all)

### [SuperMartijn642's Core Lib](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib) ([supermartijn642corelib-1.0.9-mc1.16.5](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files/3357863)⟶[supermartijn642corelib-1.0.10a-mc1.16.5](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files/3390753))

#### [supermartijn642corelib-1.0.10a-mc1.16.5](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files/3390753)

* Fixed TextComponents#block using a client-side only method

#### [3 more entries](https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files/all)

Generated using [ChangelogGenerator 2.0.0-pre10](https://github.com/TheRandomLabs/ChangelogGenerator).
