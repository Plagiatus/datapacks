![Itemchallenge Banner](https://raw.githubusercontent.com/Plagiatus/datapacks/master/itemchallenge/banner.png "Itemchallenge")

# Itemchallenge
### collect every item in the game

[v3.18](https://github.com/Plagiatus/datapacks/raw/master/itemchallenge/itemchallenge_v3.18.zip) (1.18.2)  
[v3.17](https://github.com/Plagiatus/datapacks/raw/master/itemchallenge/itemchallenge_v3.17.zip) (1.17.1)  
[v3.0](https://github.com/Plagiatus/datapacks/raw/master/itemchallenge/itemchallenge_v3.0.zip) (1.16)  
[v2.0](https://github.com/Plagiatus/datapacks/raw/master/itemchallenge/itemchallenge_v2.0.0.zip) (1.13)

# 1.16+ Version (3.0)

_If you're using the old version, a lot has changed since then in terms of features. For that reason you can find the old instructions below_.

## How to play

The premise is easy: Find every item in the game and return it to the shrine.  
The problem: There are **888** different items in the game obtainable in survival.  

All you have to do is move up to the shrine (of your team) and place the items you want to register into the chest. **Be aware that that will consume the item** (if it hasn't been handed in before). Note that you need to stand close to the shrine to activate and actually check your items, or it won't work.  
You can toggle a number in the actionbar that displays the total amount of found items of your team, by using `/trigger displayScore 1/0` in chat.  
Your progress will also be tracked on the advancement screen. There you can see what items you have already collected and which ones are left.

Around the shrine, once placed, is an "adventure mode" area, that will prevent you from building or breaking any blocks in close proximity to the shrine.  
It will also protect itself against creeper explosions.

## What's new

In the 3.0 Version of this datapack, I've added **Teams**, **multiple shrines** and a possibility for **custom advancement layouts**.

## How to set up

### Shrine

Download the zip file and place it into your `world/datapacks` folder. If the world is already running, run `reload`. That's all you need to do. Now you need to find a good place for the shrine(s) to be placed.
if you think you've found that place, stand there and run

    /function itemchallenge:spawn_shrine

After placement you'll notice the adventure mode aura around the shrine. If you want/need to place blocks around the shrine, you have to switch to creative mode. The only things you must not change about the shrine is the chest, hopper and dropper.

You can place as many shrines as you want. Just make sure they don't overlap, so keep a few blocks distance between them.

#### Signs

The signs in the shrines will automatically update, but only if they are placed in the positions they are already in. They show the teamid and current score. They also allow players to join that team. You can enable/disable this functionality by setting `signJoinEnabled` in `ic.settings` to either 0 or 1.

    /scoreboard players set signJoinEnabled ic.settings 0

Please note that the signs as well as the actionbar display have some delay in their updates, for performance reasons.

You can break the signs and customize their rotation and type. Also line 3 is free for you to fill with whatever you want.

### Teams

Teams are represented by a number. A newly spawned shrine will be in team 0 by default.

You can change a shrines team by standing at the shrine and running 

    /scoreboard players set @e[type=area_effect_cloud,tag=itemchallenge,limit=1,sort=nearest] ic.team <teamNumber>

replace `<teamNumber>` with the number of the team you want the shrine to join. By assigning a shrine to a new number, that team will be created automatically. You can change a shrines number at any time.

**Please note**: 
- Adding more teams will put exponentially more stress on the server with every team. So be conservative with the amount of teams you add. I've tested 4 and it worked fine, it depends on your server, just don't go crazy.
- Always add the next number first (0, 1, 2, 3, ..), as the game assumes all previous teams also exist (so setting it to 420 will create 420 teams, which will cause lots of lag!)
- Once a team has been created, you cannot remove it anymore.

### Custom Layouts

Since the full list of items in the advancement screen is hard (and laggy) to read, you can choose a different layout.

There is currently **1** custom layout available for download:

#### Alphabetical
- [1.16](https://github.com/Plagiatus/datapacks/raw/master/itemchallenge/custom_layouts/itemchallenge_v3.16_alphabetical)
- [1.17](https://github.com/Plagiatus/datapacks/raw/master/itemchallenge/custom_layouts/itemchallenge_v3.17_alphabetical)
- [1.18](https://github.com/Plagiatus/datapacks/raw/master/itemchallenge/custom_layouts/itemchallenge_v3.18_alphabetical)

#### How to set up

Download your desired layout, put it into the datapacks folder and make sure it is applied **on top** of the itemchallenge base pack.

#### Make your own

I have written a small script that allows you to create your own layouts fairly easily. [Download here](https://github.com/Plagiatus/datapacks/raw/master/itemchallenge/custom_layouts/generator.zip), unzip it into your datapacks folder and read the instructions inside the `itemchallenge_advancements_override/generator` folder. You need node.js to run this script.

Of course you can also create your own layout from scratch, as long as you keep the file names I've established it will work no problem.

This is somewhat advanced and is not recommended for beginners.

If you came up with a cool pack that has an interesting grouping, please share it with me and if I like it, I'll put it up to download on this page here as well.  
If you have questions or run into any issues with this, let me know (contact see below).

# 1.13 Version (2.0)

## How to play

The premise is easy: Find every item in the game and return it to the shrine.  
The problem: There are 704 different items in the game obtainable in survival.  

All you have to do is move up to the shrine and place the items you want to register into the chest. **Be aware that that will consume the item.**  
The number in the actionbar displays the total amount of found items.  
Your progress will also be tracked on the advancement screen. There you can see what items you have already collected and which ones are left.

Around the shrine, once placed, is an "adventure mode" area, that will prevent you from building or breaking any blocks in close proximity to the shrine.  
It will also protect itself against creeper explosions.

## How to set up

Download the zip file and place it into your `world/datapacks` folder. If the world is already running, run `reload`. That's all you need to do. Now you need to find a good place for the shrine to be placed.
if you think you've found that place, stand there and run

    /function itemchallenge:spawn_shrine

Make sure you have found the best spot, as having mutltiple shrines will break the pack.

After placement you'll notice the adventure mode aura around the shrine. If you want/need to place blocks around the shrine, you have to switch to creative mode.


## Further Information

Originally created for *Hardcore Hermits*, a series on the [Hermitcraft](http://hermitcraft.com/) Server. Idea by [Xisumavoid](http://xisumavoid.com/).

### Multiplayer

It is possible to play this datapack in multiplayer, but the scores are counted for the whole world and not individually per player.

### Episodes  

That is why there is a "episode" mechanic built into this datapack. If you are a youtuber yourself and want timed 20 minute Episodes to play by, use 

    /trigger startEpisode

to start the timer. When the episode is over, you will get a message in chat as well as a title on screen informing you that it is over.  
*Using this feature will stop the daylight circle once the episode is over and reenable it when a new episode is started!*

### Problems that may occur

The most common problem is that an item isn't detected eventhough it should be. That is most definitly because of one reason:  
As soon as no player is in close proximity to the shrine anymore, the shrine stops detecting items (for lag reasons). So if you put in an item to get detected, just wait around the shrine for a few seconds,
that way you can be sure it's detected correctly.

## Contact

If you have any questions, concerns, praise or found a bug, you can contact me directly at [contact@plagiatus.net](mailto:contact@plagiatus.net) or use my [contact form](http://plagiatus.net/#contact).
