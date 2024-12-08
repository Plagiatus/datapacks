![Elevators Banner](https://raw.githubusercontent.com/Plagiatus/datapacks/master/elevators/banner.png "Elevators")

# Elevators

[![Modrinth Downloads](https://img.shields.io/modrinth/dt/vanilla-elevators?style=for-the-badge&label=Modrinth%20Downloads&logo=modrinth&color=%231bd96a)](https://modrinth.com/datapack/vanilla-elevators)

[latest version (v1.1)](https://github.com/Plagiatus/datapacks/raw/master/elevators/elevators_v1.1.zip) (1.21.4)  
[v1.0](https://github.com/Plagiatus/datapacks/raw/master/elevators/elevators_v1.0.0.zip) (1.20)  


## What it does

It basically adds the elevator blocks from the OpenBlocks mod to the vanilla game.

The elevator blocks can be crafted from 8 wool surrounding an ender pearl in a crafting bench.

![crafting](https://raw.githubusercontent.com/Plagiatus/datapacks/master/elevators/crafting.png)

When placed on the same x/z coordinate and jumping / sneaking, they will teleport you up / down to the next elevator directly above / below. An elevator is only considered operational if the two blocks direcly above it are air.

**By default, all elevators link to all elevators**, but through the _settings_ you can enable **colors mode**, which allows you to dye elevators and link only elevators with the same dye.

Also in the settings you can set an xp cost to use an elevator.

Thanks to new tech introduced in 1.20, you can even **camouflage your elevator block by just rightclicking it with any block**.  

To **remove** an elevator, **hit it with a pickaxe**.

To show some basic help in-game, use `/trigger elevator.help`.

## How to set up

Download the zip file and place it into your `world/datapacks` folder. If the world is already running, run `reload`. That's all you need to do for it to start working.  

However, have a look at the following settings to customize your experience.


## Settings

This datapack comes with some settings that you can adjust to customize your experience. All settings are changed by running this command in chat:

    scoreboard players set <setting> elevator.settings <value>

### range
_Default: 384_  
Limits the maximum distance an elevator can teleport a player. By default it's the entire world height. **Setting it to a value below 3 will render all elevators useless.**

### sameColor
_Default: 0_  
If set to `1`, elevators will only teleport players to elevators with the same color. It is recommended to also enable `showColor` when turning this on. **Rightclick an elevator with a dye to change its color.**

### showColor
_Default: 0_  
If set to `1`, elevators will display the color they have been set to with a small particle. Also useful to see where elevators are.

### requireXP
_Default: 0_  
A value >0 required players to pay with this amount of experience points (not levels!) to use an elevator. If they have less XP than this value, they won't be able to use an elevator.


## Troubleshooting

In case some parts of the datapack don't work as expected anymore (crafting, placing, breaking, interacting), here is a simple steps you can take to try to resolve them:

Because a lot of things are triggered through advancements, so running `advancement revoke Player from elevator:root` should reset those triggers for the "Player". This should fix most issues.


### Contact

If you have any questions, concerns, praise or found a bug, you can contact me directly at [contact@plagiatus.net](mailto:contact@plagiatus.net) or use my [contact form](http://plagiatus.net/#contact).


### Changelog

#### 1.1
08.12.2024 
- updated to 1.21.4
- fixed jigsaw block appearance before crafting
- added help trigger

#### 1.0
23.05.2023 released  
_Please note: Due to a limitation of how custom crafting could be done at this time, the elevator block looks like a jigsaw block and is also called that until crafted._