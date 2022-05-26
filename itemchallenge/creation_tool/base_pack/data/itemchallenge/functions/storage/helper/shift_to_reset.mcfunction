# shift teams the amount of times $shiftAmount is set to.
data modify storage ic:teams current set from storage ic:teams storage[0]
data remove storage ic:teams storage[0]

scoreboard players remove $shiftAmount ic.tmp 1
data modify storage ic:teams storage append from storage ic:teams current
execute if score $shiftAmount ic.tmp matches 1.. run function itemchallenge:storage/helper/shift_to_reset