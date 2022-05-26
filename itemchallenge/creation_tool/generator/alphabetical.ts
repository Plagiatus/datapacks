import { Group, removeNamespace } from "./main.js";
import * as fs from "fs";

interface Groups {
    [name: string]: string[];
}

interface AssociativeArray {
    [key: string]: string;
}

export function alphabetical(): void {
    let input: Group[] = JSON.parse(fs.readFileSync("./inputs/groupings_all.json", { encoding: "utf8" }));
    let headNBT: AssociativeArray = JSON.parse(fs.readFileSync("./inputs/alphabetical_head_nbt.json", { encoding: "utf8" }));

    let sortedItems: string[] = input[0].values.sort();

    let newGroups: Groups = {};

    for (let item of sortedItems) {
        item = removeNamespace(item);
        let char: string = item[0];
        if (!newGroups[char]) newGroups[char] = [];
        newGroups[char].push(item);
    }
    let groupsArray: Group[] = [];
    let prevGroup: Group | undefined = undefined;
    for (let g in newGroups) {
        let char: string = newGroups[g][0][0];
        let group: Group = { background: "minecraft:textures\/gui\/advancements\/backgrounds\/stone.png", description: char.toUpperCase(), name: char.toUpperCase(), values: [], icon: "player_head", maxIconsPerRow: 7, icon_nbt: headNBT[char] };
        for (let v of newGroups[g]) {
            group.values.push(v);
        }
        // combine small groups
        if (prevGroup && (prevGroup.values.length + group.values.length < 7 * 7 || group.values.length < 8)) {
            prevGroup.name += group.name;
            prevGroup.description += group.description;
            prevGroup.values.push(...group.values);
        } else {
            groupsArray.push(group);
            prevGroup = group;
        }
    }
    fs.writeFileSync("./inputs/groupings_alphabetical.json", JSON.stringify(groupsArray, null, 2));
    fs.writeFileSync("./inputs/groupings.json", JSON.stringify(groupsArray, null, 2));

}