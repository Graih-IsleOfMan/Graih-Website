import { readdirSync, readFileSync } from "fs";
import path from "path";
import { markdownToHtml } from "./markdown";

const PAGES_DIRECTORY = path.join(process.cwd(), '_content/pages');

const getPageFiles = (): string[] => readdirSync(PAGES_DIRECTORY).filter(file => file.endsWith('.json'));
const getPageContents =(filename:string):string => readFileSync(path.join(PAGES_DIRECTORY, filename), 'utf8');

export const fetchPages = async(): Promise<any[]> => {
    const pages = getPageFiles()
        .map(x => ({
            slug: x.replace('.json', '')
        }))
        .map(x =>  ({
            ...x,
            ...JSON.parse(getPageContents(`${x.slug}.json`))
        }));


        const markdownTransformedPages = Promise.all(pages.map(async x => ({
            ...x,
            paragraphs: await Promise.all(x.paragraphs.map(async (y: any) => ({
                ...y,
                content: (await markdownToHtml(y.content)).replace(/\n/g, '')
            }))),
        })));

    return markdownTransformedPages;
};