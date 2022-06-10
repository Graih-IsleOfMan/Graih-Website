import { readdirSync, readFileSync } from "fs";
import path from "path";

const PAGES_DIRECTORY = path.join(process.cwd(), '_content/pages');

const getPageFiles = (): string[] => readdirSync(PAGES_DIRECTORY).filter(file => file.endsWith('.yml'));
const getPageContents =(filename:string):string => readFileSync(path.join(PAGES_DIRECTORY, filename), 'utf8');

export const fetchPages = async(): Promise<{[key:string]:string}> => {
    getPageFiles()
        .map(getPageContents)
        // either map through a yaml-to-json parser (like js-yaml) or get the cms to save directly to json
};