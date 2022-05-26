data modify storage ic:teams storage append value []

scoreboard players add $totalTeams ic.tmp 1
execute if score $totalTeams ic.tmp < $numberTeam ic.tmp run function itemchallenge:storage/helper/add_team

say addteam