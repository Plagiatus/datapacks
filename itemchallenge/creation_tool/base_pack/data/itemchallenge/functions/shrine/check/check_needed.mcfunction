scoreboard players operation $numberTeam ic.tmp = @s ic.team
execute as @e[type=area_effect_cloud,tag=itemchallenge] at @s if score @s ic.team = $numberTeam ic.tmp if data block ~ ~ ~ Items[0] run tag @s add check_here
execute if entity @e[tag=check_here,limit=1] run function itemchallenge:storage/get_team
execute as @e[tag=check_here] at @s run function itemchallenge:shrine/check/check
execute if entity @e[tag=check_here,limit=1] run function itemchallenge:display/advancements
execute if entity @e[tag=check_here,limit=1] run function itemchallenge:storage/reset_team
tag @e[tag=check_here] remove check_here