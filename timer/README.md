![Banner](https://raw.githubusercontent.com/Plagiatus/datapacks/master/timer/banner.png "Timer System")

# Timer

[latest version (v1.0.0)](https://github.com/Plagiatus/datapacks/raw/master/timer/timerv1.0.0.zip) (1.13)


## What it does

This datapack allows you to have individual timers, show the remaining time in the actionbar and send a message as well as a title to 

## How to set up

Download the zip file and place it into your `world/datapacks` folder. If the world is already running, run `reload`. That's all you need to do, the pack will set up all it needs itself.  

## How to use

All of the controls are run through trigger commands. To set the value of a trigger, run `/trigger <triggername> set|add <value>`.  

`/trigger <triggername> add 1` can be abbreviated as `/trigger <triggername>`.

**All timers are personal timers. There are no global timers in this pack.**

#### Controls
The basic control triggers are as follows

* `timer.start`  
starts a new timer. if the timer has been paused previously, it will resume the timer. uses the set hours, minutes and seconds set through the options when using a new timer.  
* `timer.stop`  
stops the current timer.  
*  `timer.pause`  
pauses the timer. can be resumed where it paused by running `timer.start`.


#### Options
There are a bunch of different options you can set and use to run the timer.

* `timer.seconds`  
The amount of seconds the timer should use when starting a new timer. Default: 0

* `timer.minutes`  
The amount of minutes the timer should use when starting a new timer. Default: 10

* `timer.hours`  
The amount of minutes the timer should use when starting a new timer. Default: 0

* `timer.showSecond`  
1+: Shows the seconds left in the actionbar.  
0-: Doesn't show the seconds left.  
Default: 1

* `timer.showMinute`  
1+: Shows the minutes and seconds left in the actionbar. Overrides the `showSecond` setting.  
0-: Doesn't show the minutes left.  
Default: 1

* `timer.showHour`  
1+: Shows the hours, minutes and seconds left in the actionbar. Overrides the `showMinute` setting.  
0-: Doesn't show the hours left.  
Default: 1

* `timer.showTitle`  
1+: Shows a title at the end of the timer.  
0-: Doesn't show a title at the end of the timer.  
Default: 1

* `timer.sendMsg`  
1+: Sends a message to the chat at the end of the timer.
0-: Doesn't send a message at the end of the timer.  
Default: 1


## Further Important Information

This datapack uses the worldborder for accurate, lag-friendly and not by lag affected timing. That in return also means that it is...

* ...**not compatible with other datapacks that use the worldborder in any way**.
* ...**not pausing** automatically when a player leaves the game in multiplayer, thus the timer might run out while the player is offline.
* ...**not pausing** automatically when pausing the game in singleplayer without leaving the world due to how the worldborder works.

### Contact

If you have any questions, concerns, praise or found a bug, you can contact me directly at [contact@plagiatus.net](mailto:contact@plagiatus.net) or use my [contact form](http://plagiatus.net/#contact).


### Changelog

#### 1.0.0

14.02.2019 Published the first version
