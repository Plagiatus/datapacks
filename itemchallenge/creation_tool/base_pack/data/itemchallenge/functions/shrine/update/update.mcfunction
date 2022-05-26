tellraw @a[distance=..10] ["",{"text": "Updating shrine","color":"gold"}]
# execute as @e[type=area_effect_cloud,limit=1,sort=nearest] at @s run function itemchallenge:shrine/check_master
# execute as @e[type=area_effect_cloud,limit=1,sort=nearest] at @s run function itemchallenge:shrine/update/team

# function itemchallenge:shrine/check_master
function itemchallenge:shrine/update/team
scoreboard players operation @s ic.previousTeam = @s ic.team