window.addEventListener("load", init);

let packs = []
let bigPacks = []
function init() {
    packs = document.getElementsByClassName("pack");
    bigPacks = document.getElementsByClassName("pack-big");
    for(let pack of packs){
        pack.addEventListener("click", enlarge);
    }

    document.getElementById("close-btn").addEventListener("click", closePopup)
}

function enlarge(e){
    // if(e.currentTarget != e.target) return;

    document.getElementById("pack-popup").classList.add("show");
    for(let pack of bigPacks){
        if(pack.id != e.currentTarget.id) {
            pack.classList.remove("show");
        } else {
            pack.classList.add("show");
        }
    }
}

function closePopup() {
    document.getElementById("pack-popup").classList.remove("show");
}