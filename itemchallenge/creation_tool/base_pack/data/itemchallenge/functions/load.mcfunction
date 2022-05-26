scoreboard objectives add ic.tmp dummy
scoreboard objectives add ic.points dummy
scoreboard objectives add ic.team dummy
scoreboard objectives add ic.border dummy
scoreboard objectives add ic.signTimer dummy
scoreboard objectives add ic.timer dummy
scoreboard objectives add ic.previousTeam dummy
scoreboard objectives add ic.settings dummy

scoreboard objectives add startEpisode trigger
scoreboard objectives add displayScore trigger

# scoreboard objectives add ic.relog custom:leave_game

gamerule commandBlockOutput false

execute unless data storage ic:teams storage run data merge storage ic:teams {storage:[[]]}
execute unless score signJoinEnabled ic.settings = signJoinEnabled ic.settings run scoreboard players set signJoinEnabled ic.settings 1