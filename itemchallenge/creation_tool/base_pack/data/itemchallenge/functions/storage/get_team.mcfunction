# gets the teams found items into the ic:teams current storage
# needs as input $numberTeam ic.tmp

execute store result score $totalTeams ic.tmp run data get storage ic:teams storage
scoreboard players remove $totalTeams ic.tmp 1
execute if score $totalTeams ic.tmp < $numberTeam ic.tmp run function itemchallenge:storage/helper/add_team
scoreboard players operation $shiftAmount ic.tmp = $numberTeam ic.tmp
scoreboard players add $shiftAmount ic.tmp 1
execute if score $shiftAmount ic.tmp matches 1.. run function itemchallenge:storage/helper/shift_team