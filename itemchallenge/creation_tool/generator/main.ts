import * as fs from "fs";
import *  as https from "https";

interface Registry {
    [name: string]: OneEntry;
}

interface OneEntry {
    protocol_id: number;
    entries: Registry;
}

export interface Group {
    name: string;
    description: string;
    background: string;
    icon: string;
    maxIconsPerRow?: number;
    values: string[];
    icon_nbt?: string;
}

interface Language {
    [id: string]: string;
}

interface CombinedLists {
    [length: number]: string[];
}

export async function mainGeneration(version: string, displayOnly: boolean = false): Promise<void> {

    let inputsPath: string = "./inputs/";
    // let advancementsPath: string = displayOnly ? "./advancements/" : "../data/itemchallenge/advancements/";
    let advancementsPath: string = "../data/itemchallenge/advancements/";
    let lengthFunctionsPath: string = "../data/itemchallenge/functions/shrine/checks/";
    let displayFunctionPath: string = "../data/itemchallenge/functions/display/advancements.mcfunction";

    makeSurePathExists(advancementsPath);

    let roots: string[] = [];
    let all: string[] = [];
    let combList: CombinedLists = {};
    let maxWidth: number = 30;

    let reg: Registry = JSON.parse(fs.readFileSync(inputsPath + "registries.json", { encoding: "utf8" }));
    let allItems: OneEntry = reg["minecraft:item"];
    let groupings: Group[] = JSON.parse(fs.readFileSync(inputsPath + "groupings.json", { encoding: "utf8" }));
    let language: Language = await getMcLang(version);

    let groupNumber: number = 0;
    for (let group of groupings) {
        let advName: string = createRootAdv(group, groupNumber);
        let previous: string = advName;
        let maxIconsPerRow: number = group.maxIconsPerRow || maxWidth;
        let width: number = 0;
        for (let i: number = 0; i < group.values.length; i++) {
            group.values[i] = removeNamespace(group.values[i]);
            let itemName: string = group.values[i];
            if (width >= maxIconsPerRow) {
                createEndOfLineAdv(previous, advName + "_end" + i.toString());
                previous = advName;
                width = 0;
            }
            createNormalAdv(previous, itemName);
            previous = itemName;
            width++;
            if (!combList[itemName.length]) combList[itemName.length] = [];
            combList[itemName.length].push(itemName);
            all.push(itemName);
        }
        createEndOfLineAdv(previous, advName + "_end");
        groupNumber++;
    }

    if (!displayOnly) {
        makeSurePathExists(lengthFunctionsPath);
        makeSurePathExists("../data/itemchallenge/functions/display/");
        filteredByNameLengthTestFunctions();
        advancementDisplayFunction();
    }

    function filteredByNameLengthTestFunctions(): void {

        for (let comb in combList) {
            let names: string[] = combList[comb];
            let content: string = "";
            for (let name of names) {
                let id: number = getItemId(name);
                content +=
                    `execute if score #found ic.tmp matches 0 if block ~ ~ ~ hopper{Items:[{Slot:0b,id:"minecraft:${name}"}]} run scoreboard players set #found ic.tmp ${id}
execute if score #found ic.tmp matches ${id} unless data storage ic:teams {current:["${name}"]} store result score #new ic.tmp run data modify storage ic:teams current append value "${name}"
`;
            }
            // console.log(Number(comb));
            fs.writeFileSync(lengthFunctionsPath + (Number(comb) + 10) + ".mcfunction", content);
        }
    }

    function advancementDisplayFunction(): void {
        let content: string = "";
        for (let item of all) {
            content +=
                `execute if data storage ic:teams {current:["${item}"]} as @a if score @s ic.team = $numberTeam ic.tmp run advancement grant @s only itemchallenge:${item}
`;

        }
        fs.writeFileSync(displayFunctionPath, content);
    }

    function addNamespace(input: string): string {
        if (!input.startsWith("minecraft:")) {
            input = "minecraft:" + input;
        }
        return input;
    }

    function getItemId(input: string): number {
        return allItems.entries[addNamespace(input)].protocol_id;
    }

    function getTranslationString(input: string): string {
        if (language["item.minecraft." + removeNamespace(input)])
            return "item.minecraft." + removeNamespace(input);

        return "block.minecraft." + removeNamespace(input);
    }

    function createRootAdv(g: Group, rootNumber: number): string {
        let content: string =
            `{
    "criteria": {
        "impossible": {
            "trigger": "minecraft:tick"
        }
    },
    "display": {
        "show_toast": false,
        "background": "${g.background}",
        "icon": {
            ${g.icon_nbt ? '"nbt": "' + g.icon_nbt + '",' : ""}
            "item": "${g.icon}"
        },
        "description": "${g.description}",
        "title": "${g.name}",
        "announce_to_chat": false
    }
}`;
        // let advName: string = g.name.toLowerCase().replace(/ /g, "_");
        let advName: string = "root_" + rootNumber;
        fs.writeFileSync(advancementsPath + advName + ".json", content);
        roots.push(advName);
        return advName;
    }

    function createNormalAdv(parent: string, item: string): void {
        let content: string = `{
    "parent": "itemchallenge:${parent}",
    "criteria": {
        "impossible": {
            "trigger": "minecraft:impossible"
        }
    },
    "display": {
        "show_toast": true,
        "icon": {
            "item": "${addNamespace(item)}"
        },
        "description": " ",
        "title": {
            "translate": "${getTranslationString(item)}"
        },
        "announce_to_chat": false
    }
}`;
        fs.writeFileSync(advancementsPath + item + ".json", content);
    }

    function createEndOfLineAdv(parent: string, name: string): void {
        let content: string = `{
    "parent": "itemchallenge:${parent}",
    "criteria": {
        "impossible": {
            "trigger": "minecraft:location"
        }
    }
}`;
        fs.writeFileSync(advancementsPath + name + ".json", content);
    }

    function makeSurePathExists(path: string): void {
        if (fs.existsSync(path)) return;
        fs.mkdirSync(path, { recursive: true });
    }
}
export function removeNamespace(input: string): string {
    if (input.startsWith("minecraft:")) {
        input = input.substr(10);
    }
    return input;
}

function getMcLang(version: string): Promise<Language> {
    let p: Promise<Language> = new Promise((resolve, reject) => {
        let data: string = "";
        https.get(`https://raw.githubusercontent.com/misode/mcmeta/${version}-assets/assets/minecraft/lang/en_us.json`, (res) => {
            res.on("data", (d) => {
                data += d;
            });
            res.on("end", () => {
                resolve(JSON.parse(data));
            });
            res.on("error", () => { reject(); });
        });
    });
    return p;

}