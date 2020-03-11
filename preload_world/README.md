![World Pre-Generation Banner](https://raw.githubusercontent.com/Plagiatus/datapacks/master/preload_world/banner.png "World Pre-Generation")

# World Preloading/Pre-Generation

[latest version (v1.1)](https://github.com/Plagiatus/datapacks/raw/master/preload_world/preload_worldv1.1.zip) (1.13+)   
[(v1.0)](https://github.com/Plagiatus/datapacks/raw/master/preload_world/preload_worldv1.0.zip) (1.13+)


## What it does

This datapack will allow you to easily pre-generate/preload your world, for when you want to play e.g. survival and don't want your server to be generating the world (aka lagging) while you're exploring for the first few thousand blocks. **This is especially important in multiplayer.**

**This datapack is intended to be run BEFORE you play in a world, but will still work after you've played for a while as well.**

## How to set up

**This datapack has only been tested in singleplayer and it is recommended that you use it in singleplayer or on a server where you're the only one online. While it shouldn't cause any issues to do it on a server (except for the lag you're trying to prevent when doing this), you should not do that unless you have to!**

Download the zip file and place it into your `world/datapacks` folder. If the world is already running, run `reload`. Then join the world if you aren't already, make sure all the settings are correct and run the function command that starts the process.

## Settings

The generation will use the player to load all the chunks, this is why it's important to set the settings correctly. Make sure you go through ALL the settings and make sure they are correct. All of these settings have a default value. If you're fine with those values, you can keep them that way.

To change a setting, run this command in chat, replacing `<settingName>` with the name of the setting you want to change and `<value>` with the value this setting should have now.

    /scoreboard players set <settingName> pl.settings <value>

### Displaying the settings

All settings are scoreboard scores, which can be shown by setting the scoreboard `pl.settings` to be viewed on the sidebar like this:  

    /scoreboard objectives setdisplay sidebar pl.settings

### setGamerules

_Default: 1_  
If `setGamerules` is set to 1, it will set the gamerules `doDaylightCycle`, `doWeatherCycle` and `doMobSpawning` to false at the beginning and to true at the end of the generation. Set it to 0 to disable this functionality.  

### renderDistance

_Default: 8_  
You need to set `renderDistance` to your clients (singleplayer) or your servers (multiplayer) render distance, as that is important for the size of the steps the generation can make. You can also set it to a lower number than your actual render distance for a less resource intensive generation.

### waitTime

_Default: 40 (2 seconds)_  
`waitTime` describes the amount of ticks (there are 20 ticks per second) between each step of the generation. If your computer is stronger, you might be able to decrease this value (I'd recommend not to go below 20), if your computer has trouble keeping up, increase this number.  
This, together with `renderDistance` is the factor with the biggest impact on your processor, so tweak as necessary.

### Size

#### Center
_Default: 0_  
The center position around which you want to pre-generate your world can be set using `X` and `Z`. These values are independant of each other.

#### Width
_Default: 1024_  
To set the size of your pre-generated area, use `DX` and `DZ`. These describe the side length of the generated area, centered around `X` and `Z` _(not around worldspawn!)_. This means that the default value of 1024 will pre-generate the area from `-512 ~ -512` to `+512 ~ +512` (assuming `X` and `Z` are set to their default of 0). These values are independant of each other.  
Be aware that the generated area is _at least_ the size given in `DX` and `DZ`, and will most likely be a little bit bigger depending on many factors.

### Dimension

_Default: 1_   
You can set which dimension you want to pre-generate. For this, set each of `overworld`, `nether` and `end` to either 1 (pre-generate) or 0 (don't pre-generate). You cannot set different settings (generation size, wait time etc) for different dimensions, so if you want/need that, you'll have to run them one after the other.  
_This is the only setting that is changed to 0 after a run is completed to prevent accidental re-runs!_

## Running the Generation

Once all the settings are set appropriately, run the following command as the player in the game:

    /function preload:run

After this, you will be teleported around a lot. Once the process has finished, you will be teleported to the worldspawn. The actionbar will inform you about the current progress.

**This process takes a while and only runs while the player is in the world!**

## Aborting the Generation

If for whatever reason you want to abort the generation, you can run the following command:

    /function preload:run/done

_Please note that you will not be able to resume the generation once aborted and will have to restart!_

## Uninstalling

If you wish to uninstall/remove the pack, run the following function before you remove it, so you don't have any leftover data in your world that you don't need:

    /function preload:uninstall

### Contact

If you have any questions, concerns, praise or found a bug, you can contact me directly at [contact@plagiatus.net](mailto:contact@plagiatus.net) or use my [contact form](http://plagiatus.net/#contact) on my website.

### Changelog

#### 1.1 
10.03.2020 Added X and Z Settings and their functionality

#### 1.0
27.02.2020 Created Pack 
