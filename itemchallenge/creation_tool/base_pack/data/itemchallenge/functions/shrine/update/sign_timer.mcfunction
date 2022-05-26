scoreboard players add @s ic.signTimer 1
# scoreboard players add @s ic.timer 1

execute if score @s ic.signTimer matches 200.. run function itemchallenge:shrine/update/team
execute if score @s ic.signTimer matches 200.. run scoreboard players set @s ic.signTimer 0