#use 1.13 parsing

weather rain 1

execute store result score @s ms_temp run time query daytime

scoreboard players remove @s ms_temp 24000

execute if entity @s[scores={ms_temp=..-16384}] run time add 16384
execute if entity @s[scores={ms_temp=..-16384}] run scoreboard players add @s ms_temp 16384
execute if entity @s[scores={ms_temp=..-8192}] run time add 8192
execute if entity @s[scores={ms_temp=..-8192}] run scoreboard players add @s ms_temp 8192
execute if entity @s[scores={ms_temp=..-4096}] run time add 4096
execute if entity @s[scores={ms_temp=..-4096}] run scoreboard players add @s ms_temp 4096
execute if entity @s[scores={ms_temp=..-2048}] run time add 2048
execute if entity @s[scores={ms_temp=..-2048}] run scoreboard players add @s ms_temp 2048
execute if entity @s[scores={ms_temp=..-1024}] run time add 1024
execute if entity @s[scores={ms_temp=..-1024}] run scoreboard players add @s ms_temp 1024
execute if entity @s[scores={ms_temp=..-512}] run time add 512
execute if entity @s[scores={ms_temp=..-512}] run scoreboard players add @s ms_temp 512
execute if entity @s[scores={ms_temp=..-256}] run time add 256
execute if entity @s[scores={ms_temp=..-256}] run scoreboard players add @s ms_temp 256
execute if entity @s[scores={ms_temp=..-128}] run time add 128
execute if entity @s[scores={ms_temp=..-128}] run scoreboard players add @s ms_temp 128
execute if entity @s[scores={ms_temp=..-64}] run time add 64
execute if entity @s[scores={ms_temp=..-64}] run scoreboard players add @s ms_temp 64
execute if entity @s[scores={ms_temp=..-32}] run time add 32
execute if entity @s[scores={ms_temp=..-32}] run scoreboard players add @s ms_temp 32
execute if entity @s[scores={ms_temp=..-16}] run time add 16
execute if entity @s[scores={ms_temp=..-16}] run scoreboard players add @s ms_temp 16
execute if entity @s[scores={ms_temp=..-8}] run time add 8
execute if entity @s[scores={ms_temp=..-8}] run scoreboard players add @s ms_temp 8
execute if entity @s[scores={ms_temp=..-4}] run time add 4
execute if entity @s[scores={ms_temp=..-4}] run scoreboard players add @s ms_temp 4
execute if entity @s[scores={ms_temp=..-2}] run time add 2
execute if entity @s[scores={ms_temp=..-2}] run scoreboard players add @s ms_temp 2
execute if entity @s[scores={ms_temp=..-1}] run time add 1
execute if entity @s[scores={ms_temp=..-1}] run scoreboard players add @s ms_temp 1

advancement revoke @a only multiplayer_sleep:sleep
scoreboard players reset @a ms_count
scoreboard players reset @a ms_temp
