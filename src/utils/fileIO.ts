import {existsSync, readFileSync} from "fs";
import {join} from "path";

export function stringArrFromFileSync(relFilePath: string): string[] {    
    try {
        const absFilePath = join(process.cwd(), relFilePath);
        if (!existsSync(absFilePath)) {
            console.error(`File not found: ${absFilePath}`);
            return [];
        }

        const content = readFileSync(absFilePath, 'utf-8');
    
        return content
            .split(/\r?\n/)
            .map(line => line.trim())
            .filter(line => line.length > 0);

    } catch (err) {
        console.error("Failed to read dictionary:", err);
        return [];
    }
}