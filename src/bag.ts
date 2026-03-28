import {template} from "./constants/board.js";
import {Tile} from "./tile.js";
import {swap} from "./utils/arrayUtils.js";


export class Bag {
    private tiles: Tile[] = [];
    constructor() {
        template.forEach((item) => {
            for(let i = 0; i < item.num; i++) {
                this.tiles.push(new Tile(item.letter, item.val));
            }
        })
    }

    public isEmpty(): boolean {
        return this.tiles.length === 0;
    }

    public drawTile() : Tile | undefined  {
        if(this.tiles.length === 0) return undefined;
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