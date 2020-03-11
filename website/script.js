window.addEventListener("load", init);

let packs = []
function init() {
    packs = document.getElementsByClassName("pack");
    for(let pack of packs){
        pack.addEventListener("click", toggleEnlarge);
    }
}

function toggleEnlarge(e){
    if(e.target.tagName == "PRE") return;
    if(e.target.tagName == "CODE") return;
    if(e.target.tagName == "A") return;
    e.currentTarget.classList.toggle("enlarged");
    for(let pack of packs){
        if(pack == e.currentTarget) continue;
        pack.classList.remove("enlarged");
    }
}