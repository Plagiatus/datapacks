setblock ~ ~ ~ structure_block[mode=load]{name:"itemchallenge:shrine",posX:-4,posY:-3,posZ:-4,mode:"LOAD",ignoreEntities:0b}
setblock ~ ~1 ~ redstone_block
execute as @a[distance=..5] at @s run teleport @s ~ ~1 ~
