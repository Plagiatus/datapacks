# run the check which item is in the hopper
execute store result score @s ic.tmp run data get block ~ ~ ~ Items[0].id
scoreboard players set #found ic.tmp 0
scoreboard players set #new ic.tmp 0

execute if score @s ic.tmp matches 13 run function itemchallenge:shrine/checks/13
execute if score @s ic.tmp matches 14 run function itemchallenge:shrine/checks/14
execute if score @s ic.tmp matches 15 run function itemchallenge:shrine/checks/15
execute if score @s ic.tmp matches 16 run function itemchallenge:shrine/checks/16
execute if score @s ic.tmp matches 17 run function itemchallenge:shrine/checks/17
execute if score @s ic.tmp matches 18 run function itemchallenge:shrine/checks/18
execute if score @s ic.tmp matches 19 run function itemchallenge:shrine/checks/19
execute if score @s ic.tmp matches 20 run function itemchallenge:shrine/checks/20
execute if score @s ic.tmp matches 21 run function itemchallenge:shrine/checks/21
execute if score @s ic.tmp matches 22 run function itemchallenge:shrine/checks/22
execute if score @s ic.tmp matches 23 run function itemchallenge:shrine/checks/23
execute if score @s ic.tmp matches 24 run function itemchallenge:shrine/checks/24
execute if score @s ic.tmp matches 25 run function itemchallenge:shrine/checks/25
execute if score @s ic.tmp matches 26 run function itemchallenge:shrine/checks/26
execute if score @s ic.tmp matches 27 run function itemchallenge:shrine/checks/27
execute if score @s ic.tmp matches 28 run function itemchallenge:shrine/checks/28
execute if score @s ic.tmp matches 29 run function itemchallenge:shrine/checks/29
execute if score @s ic.tmp matches 30 run function itemchallenge:shrine/checks/30
execute if score @s ic.tmp matches 31 run function itemchallenge:shrine/checks/31
execute if score @s ic.tmp matches 32 run function itemchallenge:shrine/checks/32
execute if score @s ic.tmp matches 33 run function itemchallenge:shrine/checks/33
execute if score @s ic.tmp matches 34 run function itemchallenge:shrine/checks/34
execute if score @s ic.tmp matches 35 run function itemchallenge:shrine/checks/35
execute if score @s ic.tmp matches 36 run function itemchallenge:shrine/checks/36
execute if score @s ic.tmp matches 37 run function itemchallenge:shrine/checks/37
execute if score @s ic.tmp matches 38 run function itemchallenge:shrine/checks/38
execute if score @s ic.tmp matches 39 run function itemchallenge:shrine/checks/39
execute if score @s ic.tmp matches 40 run function itemchallenge:shrine/checks/40
execute if score @s ic.tmp matches 41 run function itemchallenge:shrine/checks/41
execute if score @s ic.tmp matches 42 run function itemchallenge:shrine/checks/42
execute if score @s ic.tmp matches 43 run function itemchallenge:shrine/checks/43
execute if score @s ic.tmp matches 44 run function itemchallenge:shrine/checks/44

execute if score #new ic.tmp matches 1.. run data merge block ~ ~ ~ {Items:[]}