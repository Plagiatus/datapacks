# update the shrines team
scoreboard players operation #tmp ic.tmp = @s ic.team
scoreboard players operation $numberTeam ic.tmp = @s ic.team
function itemchallenge:storage/get_score
execute as @e[type=area_effect_cloud,tag=itemchallenge] if score @s ic.team = #tmp ic.tmp run scoreboard players operation @s ic.points = $score ic.points
execute as @e[type=area_effect_cloud,tag=itemchallenge] at @s if score @s ic.team = #tmp ic.tmp run function itemchallenge:shrine/update/signs