![Hardcore Realm Banner](https://raw.githubusercontent.com/Plagiatus/datapacks/master/hardcore_realm/banner.png "Hardcore Realm")

# Hardcore Realm

[![Modrinth Downloads](https://img.shields.io/modrinth/dt/hardcore-realm?style=for-the-badge&label=Modrinth%20Downloads&logo=modrinth&color=%231bd96a)](https://modrinth.com/datapack/hardcore-realm)


A small datapack that turns your realm into hardcore mode, by putting everyone who dies into spectator mode.  
Has a mode for "super hardcore", aka one person dies, everyone gets set to spectator, starting version 1.1.

[MC 1.21 (v1.3.1)](https://github.com/Plagiatus/datapacks/raw/master/hardcore_realm/hardcore_realm_v1.3.1.zip)  
[MC 1.18 - 1.20 (v1.3)](https://github.com/Plagiatus/datapacks/raw/master/hardcore_realm/hardcore_realm_v1.3.zip)  
[MC 1.16 - 1.17 (v1.2)](https://github.com/Plagiatus/datapacks/raw/master/hardcore_realm/hardcore_realm_v1.2.zip)  
[v1.1](https://github.com/Plagiatus/datapacks/raw/master/hardcore_realm/hardcore_realm_v1.1.zip)  
[v1.0](https://github.com/Plagiatus/datapacks/raw/master/hardcore_realm/hardcore_realm_v1.0.zip)

_All versions have been created and tested with **1.16** only, but should all work in 1.13 or above. Please contact me if you run into any issues._

## What it does

This datapack will turn your realm basically into a hardcore world, by putting anyone who died once into spectator mode. Or, if you configure it that way, it will even set everyone into spectator mode if even ONE player dies.


## How to set up

### Existing world  
Download the zip file and place it into your world/datapacks folder. If the world is already running, run reload. That's all you need to do.

**Realm**  
1. (Skip if you're uploading a singleplayer world anyways) Download the world you want to turn into a hardcore world to your singleplayer worlds
2. Copy the data pack into the world's datapack folder.
3. Reupload the world to the realm.

### New world

You can add the datapack directly when creating the world.

**Realm**  
Create the world on singleplayer and upload it to your realm after that.

## How to change to **Super Hardcore**

To change the world to super hardcore (aka if any player dies, everyone gets set to spectator mode), just run this simple command in the chat:

```
/scoreboard players set #superHardcore deaths 1
```

To set it back to "normal" hardcore, change the `1` to a `0`.

_Please note: once someone died while it was set to super hardcore, it doesn't automatically reset everyone else who didn't die if you set it back to normal!_

### Super Hardcore light
In **version 1.3** the "super hardcore light" mode was introduced, which gives the server as a whole a contingent of lives. To enable it, just set the amount of lives your server should have available through the same command as above.

```
/scoreboard players set #superHardcore deaths X
```

where `X` is the total amount of deaths you want to allow.  

_Please note: In this mode individual deaths don't cause a change to spectator mode, so a player might die multiple times and take away multiple deaths from the amount of lives available._ 

## Contact

If you have any questions, concerns, praise or found a bug, you can contact me directly at contact@plagiatus.net or use my [contact form](http://plagiatus.net/#contact).
