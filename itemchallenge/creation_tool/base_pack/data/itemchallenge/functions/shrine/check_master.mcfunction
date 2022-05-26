tag @s add self
tag @s add master
scoreboard players operation #tmp ic.tmp = @s ic.team
execute as @e[type=area_effect_cloud,tag=itemchallenge,tag=master,tag=!self] if score @s ic.team = #tmp ic.tmp run tag @e[tag=self] remove master
tag @s remove self