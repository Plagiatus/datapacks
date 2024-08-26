![Super Sponge Banner](https://raw.githubusercontent.com/Plagiatus/datapacks/master/super_sponge/banner.png "Super Sponge")

# Super Sponge

[![Modrinth Downloads](https://img.shields.io/modrinth/dt/super-sponge?style=for-the-badge&label=Modrinth%20Downloads&logo=modrinth&color=%231bd96a)](https://modrinth.com/datapack/super-sponge)

[MC 1.21 version (v1.1.3)](https://github.com/Plagiatus/datapacks/raw/master/super_sponge/SuperSponge_v1.1.3.zip)  
[MC 1.20 - 1.20.4 version (v1.1.2)](https://github.com/Plagiatus/datapacks/raw/master/super_sponge/SuperSponge_v1.1.2.zip)   
[MC 1.17 - 1.19 version (v1.1.1)](https://github.com/Plagiatus/datapacks/raw/master/super_sponge/SuperSponge_v.1.1.1.zip)    
[MC 1.14 - 1.16 version (v1.1)](https://github.com/Plagiatus/datapacks/raw/master/super_sponge/SuperSponge_v.1.1.zip) 

## Video

[Video of this datapack in action](https://streamable.com/u9ux4) (outdated, 1.21+ doesn't use floorcrafting anymore)

## What it does

This datapack allows for the creation of super sponges that effectively remove all water in a large area.

### Crafting

_1.21 and above_  
Using 6 sponges and 3 nether stars in a crafting bench will give you the sponge. It's using vanilla recipes now, so it's easily adjustable.

_1.20.4 and below_  
Craftable by default by throwing 6 regular sponges and 3 nether stars onto the ground together. Can easily be adjusted to whatever fits your servers needs. (If you need help with that, [feel free to reach out](http://plagiatus.net/#contact)).

## How to set up

Download the zip file and place it into your `world/datapacks` folder. If the world is already running, run `reload`. That's all you need to do.  
That way it has been set to **10 blocks range**. To change that, use the following command in chat (replace XX with your desired range):

    /scoreboard players set maximum fillsponge XX

This number can be changed at any time you want.

**Be aware that using this sponge especially with higher maximum numbers will lag the server!**

## Customisation

You can easily customize which blocks you want the sponge to replace.  
For this, open up the `replace.json` file located inside the pack at `SuperSponge_vXXX/data/fill_sponge/tags/block(s)/replace.json` and change the `values` tag to be whatever you want to replace.

Here are three examples that you can download (`rightclick > save target as`). You'll need to replace the `replace.json` file with one of these, renaming it to `replace.json`.

| file                    | value                                                                                                                        |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------|
| [replace_water](https://github.com/Plagiatus/datapacks/raw/master/super_sponge/replace_water.json) (default)  | "minecraft:water", "minecraft:kelp", "minecraft:seagrass", "minecraft:tall_seagrass", "minecraft:bubble_column"              |
| [replace_lava](https://github.com/Plagiatus/datapacks/raw/master/super_sponge/replace_lava.json)              | "minecraft:lava"                                                                                                             |
| [replace_underground](https://github.com/Plagiatus/datapacks/raw/master/super_sponge/replace_underground.json)| "minecraft:dirt", "minecraft:grass_block", "minecraft:stone", "minecraft:andesite", "minecraft:granite", "minecraft:diorite" |

### Contact

If you have any questions, concerns, praise or found a bug, you can contact me directly at [contact@plagiatus.net](mailto:contact@plagiatus.net) or use my [contact form](http://plagiatus.net/#contact).


### Changelog

#### 1.1.5
26.08.2024  

- Updated to Minecraft 1.21
- Added a proper recipe, thanks Mojang! No more floor crafting!
- Switched from AECs to markers. Why didn't I do that earlier?



#### 1.1
08.07.2019 fixed a bug that would cause it to ignore bubble columns. Added multiple replace.json files.

#### 1.0

06.07.2019 created the pack
 
