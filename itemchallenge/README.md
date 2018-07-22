![Banner](https://raw.githubusercontent.com/Plagiatus/datapacks/master/itemchallenge/banner.png "Itemchallenge")

# Itemchallenge
### collect every item in the game

[latest version (v2.0.0)](https://github.com/Plagiatus/datapacks/raw/master/itemchallenge/itemchallenge_v2.0.0.zip) (1.13)

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

    function itemchallenge:spawn_shrine

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
