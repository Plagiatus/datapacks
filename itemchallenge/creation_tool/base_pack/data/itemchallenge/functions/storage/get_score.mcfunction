# gets the teams items score into $score ic.points
# needs as input $numberTeam ic.tmp

function itemchallenge:storage/get_team
execute store result score $score ic.points run data get storage ic:teams current
function itemchallenge:storage/reset_team