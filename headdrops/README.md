![Banner](https://raw.githubusercontent.com/Plagiatus/datapacks/master/headdrops/banner.png "Itemchallenge")

# Headdrops
### make players drop their skull

[latest version (v2.0.1)](https://github.com/Plagiatus/datapacks/raw/master/headdrops/Headdrops_v2.0.1.zip) (1.14)  
[1.13 version (v1.0.0)](https://github.com/Plagiatus/datapacks/raw/master/headdrops/headdrops_v1.0.0.zip)

## What it does

Makes players drop their own head if they are killed by another player.  
The head will drop at the location the player was killed at.

**If you want the player to always drop their head, no matter who killed them, use [v2.0.0](https://github.com/Plagiatus/datapacks/raw/master/headdrops/Headdrops_v2.0.0.zip) instead.**

## How to set up


### Version 2.0 (1.14) and above: 
Download the zip file and place it into your `world/datapacks` folder. If the world is already running, run `reload`. That's all you need to do.  

### Version 1.0 (1.13):
After the datapack has been added to your world, it still needs some manual editing for it to work with your own skulls.
Open up the file `data/headdrop/functions/drop.mcfunction` and add one of the following lines for each of your players, obviously replacing `Playername` with the actual name of the player:

    execute at @a[scores={headDeath=1..},name=Playername] run summon item ~ ~ ~ {Item:{id:player_head,Count:1,tag:{SkullOwner:Playername}}}
	
### Additional Info

Skulls that are dropped like this won't stack with the ones that have been placed and broken again, because the game converts the name of the SkullOwner into the texture.

## Contact

If you have any questions, concerns, praise or found a bug, you can contact me directly at [contact@plagiatus.net](mailto:contact@plagiatus.net) or use my [contact form](http://plagiatus.net/#contact).
