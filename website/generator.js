const marked = require('marked');
const fs = require('fs');

let index = fs.readFileSync('index.html').toString();


let utility = [
    {
        content: marked(fs.readFileSync('../headdrops/README.md', 'utf-8')),
        id: "headdrops"
    },
    {
        content: marked(fs.readFileSync('../homes/README.md', 'utf-8')),
        id: "homes"
    },
    {
        content: marked(fs.readFileSync('../multiplayer_sleep/README.md', 'utf-8')),
        id: "multiplayer_sleep"
    },
    {
        content: marked(fs.readFileSync('../preload_world/README.md', 'utf-8')),
        id: "preload_world"
    },
    {
        content: marked(fs.readFileSync('../super_sponge/README.md', 'utf-8')),
        id: "super_sponge"
    },
    {
        content: marked(fs.readFileSync('../hardcore_realm/README.md', 'utf-8')),
        id: "hardcore_realm"
    },
    {
        content: marked(fs.readFileSync('../timer/README.md', 'utf-8')),
        id: "timer"
    },
    {
        content: marked(fs.readFileSync('../bee_nest_info/README.md', 'utf-8')),
        id: "bee_nest_info"
    },
    {
        content: marked(fs.readFileSync('../elevators/README.md', 'utf-8')),
        id: "elevators"
    },
];

let games = [
    {
        content: marked(fs.readFileSync('../itemchallenge/README.md', 'utf-8')),
        id: "itemchallenge"
    },
    {
        content: marked(fs.readFileSync('../mobchallenge/README.md', 'utf-8')),
        id: "mobchallenge"
    },
    {
        content: marked(fs.readFileSync('../25deeds/README.md', 'utf-8')),
        id: "twentyfivedeeds"
    },
];

let allUtility = "";
let allContent = "";
for(let u of utility){
    allUtility += `<div class="pack" id="${u.id}">${u.content.match(/<img([^>]*[^/])>/)[0]}</div>`;
    allContent += `<div class="pack-big" id="${u.id}">${u.content}</div>`;
}
index = index.replace('UTILITY', allUtility.replace(/<a/g,"<a target='_blank'"));

let allGames = "";
for(let g of games){
    allGames += `<div class="pack" id="${g.id}">${g.content.match(/<img([^>]*[^/])>/)[0]}</div>`;
    allContent += `<div class="pack-big" id="${g.id}">${g.content}</div>`;
}
index = index.replace('GAMES', allGames.replace(/<a/g,"<a target='_blank'"));

index = index.replace('ALLPACKS', allContent.replace(/<a/g,"<a target='_blank'"));

fs.writeFileSync('../index.html', index);