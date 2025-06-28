![Homes Banner](https://raw.githubusercontent.com/Plagiatus/datapacks/master/homes/banner.png "Homes")

# Homes

[![Modrinth Downloads](https://img.shields.io/modrinth/dt/homes-datapack?style=for-the-badge&label=Modrinth%20Downloads&logo=modrinth&color=%231bd96a)](https://modrinth.com/datapack/homes-datapack)

[latest version (v2.0)](https://github.com/Plagiatus/datapacks/raw/master/homes/homes_v2.0.zip) (1.21.5+)

[v1.2](https://github.com/Plagiatus/datapacks/raw/master/homes/homes_v1.2.zip) (1.16)  
[v1.1.1](https://github.com/Plagiatus/datapacks/raw/master/homes/homes_v1.1.1.zip) (1.14 - 1.15)

## Video

[Video of this datapack in action](https://www.youtube.com/watch?v=Qz3sOGlcX4c&)

## What it does

Homes allow you to save positions in the world and teleport to them whenever you want, including different dimensions.

This Datapack allows you to set unlimited homes in any world. The players of the world don't need OP to use the commands.

## How to set up

Download the zip file and place it into your `world/datapacks` folder. If the world is already running, run `reload`. That's all you need to do.  

You can look at the ingame-help for the datapack by running

    /trigger home.help

But while you're here you might as well read the long explanation below ↓

## Settings

Starting in v2.0 there is a setting to limit the maximum amount of homes a player can create.

`/scoreboard players set maxHomes home.settings XX`

Replace `XX` with the maximum amount. Any value below 0 disables the maximum. Changing this setting later will not remove excess homes from players, just prevent them from creating new ones if they would be above the limit.

## Commands explanations

### General

- All commands need to be prefaced with `/trigger`.  
- Some of the commands allow you to specify a specific home (the ones annotated with "(set #)"). You will always have to identify the home by its ID and cannot identify it via its name.  
- If you're not specifying a specific home in a command that allows for it, it will default to home number 1.  
- Negative values are ignored.  
- _There are no undos._

### Specific commands

`/trigger home.help`  
Display the ingame help page.

`/trigger home (set #)`  
Teleport to one of your homes. Defaults to Home #1 if nothing else is specified.

`/trigger home.set (set #)`  
Set a new home location. This command will also override a home if set to an existing number.

`/trigger home.delete (set #)`  
Deletes the specified home.  

`/trigger home.list`  
Lists all your homes in a list with their ids, coordinates and names.

`/trigger home.rename (set #)`  
_(was `home.set_name` before 2.0)_  
Sets the name of the specified home to the name of the item in your hand. **The item needs to be renamed in an anvil for it to work.** If it isn't or your hand is empty, it will not change the name.

## Further Information

### 2.0 and above

### Uninstalling

You can use `/function homes:uninstall` to remove all the scoreboards from the game. This will however not remove the saved homes from the game. To remove those, run `/data remove storage homes:homes homes`.

### Before 2.0
- **If you want to move your spawnchunks, you'll have to run this command afterwards to keep the datapack working:**

      teleport @e[type=area_effect_cloud,tag=pla_home] x y z
	
replace `x y z` with your new worldspawn coordinates.

- Homes are running out ~3 years (real time) after you've created them. If this is a concern for you, reach out to me and I'll let you know how to extend it by another 3 years.  
- Homes work up to 2^25 - 1 (33554431) blocks in both positive and negative x and z direction as well as 0-255 in y direction. This covers the whole possible minecraft world. Don't try to set a Home at the Farlands is what I'm trying to say.
- Homes are only compatible with the three vanilla versions overworld, nether and end. Custom Dimensions are not supported.

#### Uninstalling
To remove all traces of the pack from your world you can run the `homes:uninstall` function before you deactivate the datapack (or delete it from your world folder). **This will remove all set homes for everyone** as well as remove all the scoreboard objectives it's using. If you just deactivate the pack and reactivate it again afterwards, all the homes will still be there.

### Contact

If you have any questions, concerns, praise or found a bug, you can contact me directly at [contact@plagiatus.net](mailto:contact@plagiatus.net) or use my [contact form](http://plagiatus.net/#contact).


### Changelog

#### 2.0
28.06.2025 Rewrote the entire thing for 1.21.5, now using storage instead of area effect clouds.

#### 1.2
29.06.2020 Updated to 1.16

#### 1.1.1
13.10.2019 Removed the `replace:true` from the load and tick. No clue how they ended up in there.

#### 1.1
5.4.2019 Multidimensional Support

#### 1.0
4.5.2019 released
