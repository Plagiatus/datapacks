scoreboard players add @s ic.timer 1

execute if score @s[tag=master] ic.timer matches 8.. run function itemchallenge:shrine/check/check_needed
execute if score @s ic.timer matches 8.. run scoreboard players set @s ic.timer 0