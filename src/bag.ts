import {template} from "./template.js";
import {Tile} from "./tile.js";
import {swap} from "./assets/utils.js"


export class Bag {
    private tiles: Tile[] = [];
    constructor() {
        template.forEach((item) => {
            for(let i = 0; i < item.num; i++) {
                this.tiles.push(new Tile(item.letter, item.val));
            }
        })
    }

    public drawTile() : Tile  {
        if(this.tiles.length === 0) throw new Error("Bag empty")
        let tileIndex = Math.floor(Math.random() * this.tiles.length);
        this.tiles = swap(this.tiles, tileIndex)
        return this.tiles.pop()!;
    }

    public toString() : string {
        let arr:string[] = ["Bag: ["];
        this.tiles.forEach((tile) => {
            arr.push(tile.letter);
        });
        arr.push("]");
        return arr.join("") + `${this.tiles.length}`;
    }
}