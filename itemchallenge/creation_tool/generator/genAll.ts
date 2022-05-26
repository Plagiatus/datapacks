import * as fs from "fs";
import *  as https from "https";

interface Registry {
    [name: string]: OneEntry;
}

interface OneEntry {
    protocol_id: number;
    entries: Registry;
}
interface Group {
    name: string;
    description: string;
    background: string;
    icon: string;
    values: string[];
}

export async function generateAll(version: string): Promise<void> {
    let inputsPath: string = "./inputs/";
    if (version) {
        let newReg: string = await getMcdataRegistry(version);
        fs.writeFileSync(inputsPath + "registries.json", newReg, { encoding: "utf8" });
    }
    let reg: Registry = JSON.parse(fs.readFileSync(inputsPath + "registries.json", { encoding: "utf8" }));
    let allItems: OneEntry = reg["minecraft:item"];

    let impossibleItems: string[] = JSON.parse(fs.readFileSync(inputsPath + "impossible_items.json", { encoding: "utf8" }));

    let allGroup: Group = { background: "minecraft:textures\/gui\/advancements\/backgrounds\/stone.png", description: "Item Challenge", "name": "Item Challenge", "icon": "minecraft:stone", values: [] };

    for (let item in allItems.entries) {
        if (!impossibleItems.includes(item)) {
            allGroup.values.push(item);
        }
    }

    fs.writeFileSync(inputsPath + "groupings_all.json", JSON.stringify([allGroup], null, 2));
    fs.writeFileSync(inputsPath + "groupings.json", JSON.stringify([allGroup], null, 2));
}

function getMcdataRegistry(version: string): Promise<string> {
    let p: Promise<string> = new Promise((resolve, reject) => {
        let data: string = "";
        https.get(`https://raw.githubusercontent.com/Arcensoth/mcdata/${version}/generated/reports/registries.json`, (res) => {
            res.on("data", (d) => {
                data += d;
            });
            res.on("end", () => {
                resolve(data);
            });
            res.on("error", () => { reject(); });
        });
    });
    return p;

}