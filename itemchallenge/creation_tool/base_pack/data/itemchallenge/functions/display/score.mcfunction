scoreboard players operation #tmp ic.tmp = @s ic.team

execute as @e[tag=itemchallenge,tag=master] if score @s ic.team = #tmp ic.tmp run scoreboard players operation #display ic.tmp = @s ic.points
title @s actionbar {"score": {"name": "#display","objective": "ic.tmp"},"color":"gold"}