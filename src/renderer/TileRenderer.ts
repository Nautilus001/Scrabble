import {Tile } from "../core/index.js"

export class TileRenderer {
    renderAsText(tile: Tile, justLetter: boolean = false) {
        if(justLetter) return console.log(`[${tile.letter}]`);
        return console.log(`[${tile.letter}|${tile.point}]`);
    }
}