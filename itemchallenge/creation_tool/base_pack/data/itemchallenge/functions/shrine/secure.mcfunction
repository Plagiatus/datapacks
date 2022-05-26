execute as @e[type=creeper,tag=!ic.noexplosion,distance=..15] run data merge entity @s {ExplosionRadius:0b}
tag @e[type=creeper,tag=!ic.noexplosion,distance=..15] add ic.noexplosion

tag @a[distance=..12] add ic.shrine

kill @e[type=tnt,distance=..12]
kill @e[type=tnt_minecart,distance=..12]
kill @e[type=fireball,distance=..12]