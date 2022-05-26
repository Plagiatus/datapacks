# resets the teams to be sorted again
# needs as input $numberTeam ic.tmp

execute store result score $totalTeams ic.tmp run data get storage ic:teams storage
scoreboard players operation $totalTeams ic.tmp -= $numberTeam ic.tmp
data modify storage ic:teams storage append from storage ic:teams current
scoreboard players operation $shiftAmount ic.tmp = $totalTeams ic.tmp
execute if score $shiftAmount ic.tmp matches 1.. run function itemchallenge:storage/helper/shift_to_reset