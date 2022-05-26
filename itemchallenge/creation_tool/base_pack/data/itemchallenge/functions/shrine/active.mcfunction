#dispense items
execute if score @s ic.timer matches 1 run setblock ~ ~-2 ~ quartz_block
execute if score @s ic.timer matches 4 run setblock ~ ~-2 ~ redstone_block