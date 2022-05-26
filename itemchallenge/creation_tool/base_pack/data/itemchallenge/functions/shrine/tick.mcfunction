# check for team change
execute unless score @s ic.team = @s ic.previousTeam run function itemchallenge:shrine/update/update

function itemchallenge:shrine/check_master

# timers
execute if entity @s[tag=master] run function itemchallenge:shrine/update/sign_timer
function itemchallenge:shrine/update/timer
execute if entity @a[distance=..10] run function itemchallenge:shrine/active

# secure the shrine
tag @a remove ic.shrine
execute at @e[tag=itemchallenge] run function itemchallenge:shrine/secure
gamemode adventure @a[tag=ic.shrine,gamemode=survival]
gamemode survival @a[tag=!ic.shrine,gamemode=adventure]

# display points to those that want it
scoreboard players enable @a displayScore
execute as @a[scores={displayScore=1..}] at @s run function itemchallenge:display/score

# update advancements for relogging people
# execute as @a[scores={ic.relog=1..}] run function itemchallenge:display/advancements