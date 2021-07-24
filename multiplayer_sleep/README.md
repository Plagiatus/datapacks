![Multiplayer Sleep Banner](https://raw.githubusercontent.com/Plagiatus/datapacks/master/multiplayer_sleep/banner.png "Multiplayer Sleeping System")

# Multiplayer Percentage Sleeping System

[latest version (v2.2.0)](https://github.com/Plagiatus/datapacks/raw/master/multiplayer_sleep/multiplayer_sleepv2.2.0.zip) (1.16)   
[latest version (v2.1.0)](https://github.com/Plagiatus/datapacks/raw/master/multiplayer_sleep/multiplayer_sleepv2.1.0.zip) (1.14 - 1.15)   
[1.13 version (v2.0.2)](https://github.com/Plagiatus/datapacks/raw/master/multiplayer_sleep/multiplayer_sleepv2.0.2.zip)  
[1.12 version (v1.0.0)](https://github.com/Plagiatus/datapacks/raw/master/multiplayer_sleep/multiplayer_sleepv1.0.0.zip)  

## <span style="color:red">This datapack has been made obsolete by the 1.17 `playersSleepingPercentage` gamerule.</span>
It is advised that you use that instead.

## What it does

This Datapack is intended for larger survival servers. It allows the OPs of the server to set a percentage of players required to sleep to skip the night.
So if you want to skip the night if half of the players playing are in a bed, set the percentage to 50%.

When a player is trying to pass the night, a message in chat with how many players are left as well as an advancement will make other online players aware of this intent.

## How to set up

Download the zip file and place it into your `world/datapacks` folder. If the world is already running, run `reload`. That's all you need to do.  
That way it has been set to **10% as a standard**. To change that, use the following command in chat (replace XX with your desired percentage):

    scoreboard players set requiredPercent multSleep.count XX

This number can be changed at any time you want.
	
## Further Information

This datapack will...

* ...always require a minimum of 1 player to sleep.  
* ...round down the required players. So if the percentage is set to 50% and 3 players are online, 1.5 players need to sleep, which the pack rounds down to one.  
* ...clear the weather whenever the night is skipped for 999999 seconds. If you'd rather have the "normal" behaviour of it turning to sun for a limited but random amount of time, you can swap out the `skip.mcfunction` file for [this one](https://github.com/Plagiatus/datapacks/raw/master/multiplayer_sleep/skip.mcfunction)  
* ...not interfere with the phantom timer. If you are in a bed, the timer resets, as always.  
* ...only consider players in the overworld when counting how many players need to sleep.
* ...add to the time instead of setting it, so you won't loose your time played/ingame days

### Contact

If you have any questions, concerns, praise or found a bug, you can contact me directly at [contact@plagiatus.net](mailto:contact@plagiatus.net) or use my [contact form](http://plagiatus.net/#contact).


### Changelog

#### 2.2.0

24.06.2020 Update to 1.16

#### 2.1.0

19.04.2019 Update to mc 1.14

#### 2.0.2

11.01.2019 made the pack more reliable on laggier servers. Prevented a double night skip from happening.

#### 2.0.1

11.08.2018 fixed a small bug that would sometimes cause the toast notifications not to show up as well as not skip the night in specific circumstances.

#### 2.0

updated to mc 1.13
