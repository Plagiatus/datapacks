// brings together all the steps to generate a new version's itemchallenge

import * as fs from "fs";
import { argv } from "process";
import { alphabetical } from "./alphabetical";
import { generateAll } from "./genAll";
import { mainGeneration } from "./main";

console.warn("\x1b[33m%s\x1b[0m", "Remember to check and potentially update the list of unobtainable items!!");

createNewVersion();

async function createNewVersion(): Promise<void> {
    if (!argv[2]) {
        console.error("\x1b[31m%s\x1b[0m", "No input version found. Please provide a version as the first argument.");
        return;
    }
    let version: string = argv[2];
    
    // normal generation
    let versionFolderName: string = "../itemchallenge_v3." + version;
    await generateAll(version);
    await mainGeneration(version);
    if (fs.existsSync(versionFolderName)) fs.rmdirSync(versionFolderName, { recursive: true });
    fs.mkdirSync(versionFolderName);
    copyFolderContents("../base_pack", versionFolderName);
    copyFolderContents("../data", versionFolderName + "/data");

    console.log("Done generating normal files");
    
    // alphabetical only
    let versionFolderNameAlphabetical: string = "../itemchallenge_v3." + version + "_alphabetical";
    if (fs.existsSync(versionFolderNameAlphabetical)) fs.rmdirSync(versionFolderNameAlphabetical, { recursive: true });
    if (fs.existsSync("../data")) fs.rmdirSync("../data", { recursive: true });
    fs.mkdirSync(versionFolderNameAlphabetical);
    alphabetical();
    await mainGeneration(version, true);
    copyFolderContents("../base_pack_alphabetical", versionFolderNameAlphabetical);
    copyFolderContents("../data", versionFolderNameAlphabetical + "/data");
    
    console.log("Done generating alphabetical override");

    // cleanup
    fs.rmdirSync("../data", {recursive: true});

    // done
    console.log("\x1b[32m%s\x1b[0m", "Done!");
}

function copyFolderContents(src: string, dest: string): void {
    let folderContent: string[] = fs.readdirSync(src);
    for (let fileOrFolder of folderContent) {
        let srcPath: string = src + "/" + fileOrFolder;
        let destPath: string = dest + "/" + fileOrFolder;
        if (fs.statSync(srcPath).isDirectory()) {
            if (!fs.existsSync(destPath)) fs.mkdirSync(destPath);
            copyFolderContents(srcPath, destPath);
        }
        else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}