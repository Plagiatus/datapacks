const marked = require('marked');
const fs = require('fs');

let index = fs.readFileSync('index.html').toString();

let headdrops = marked(fs.readFileSync('../headdrops/README.md', 'utf-8'));
let homes = marked(fs.readFileSync('../homes/README.md', 'utf-8'));
let itemchallenge = marked(fs.readFileSync('../itemchallenge/README.md', 'utf-8'));
let mobchallenge = marked(fs.readFileSync('../mobchallenge/README.md', 'utf-8'));
let multiplayer_sleep = marked(fs.readFileSync('../multiplayer_sleep/README.md', 'utf-8'));
let preload_world = marked(fs.readFileSync('../preload_world/README.md', 'utf-8'));
let super_sponge = marked(fs.readFileSync('../super_sponge/README.md', 'utf-8'));
let timer = marked(fs.readFileSync('../timer/README.md', 'utf-8'));

let utility = [headdrops, homes, multiplayer_sleep, preload_world, super_sponge, timer];
let games = [itemchallenge, mobchallenge];

let allUtility = "";
for(let u of utility){
    allUtility += `<div class="pack">${u}</div>`;
}
index = index.replace('UTILITY', allUtility.replace(/<a/g,"<a target='_blank'"));

let allGames = "";
for(let g of games){
    allGames += `<div class="pack">${g}</div>`;
}
index = index.replace('GAMES', allGames.replace(/<a/g,"<a target='_blank'"));

fs.writeFileSync('../index.html', index);