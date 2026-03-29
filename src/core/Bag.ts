import {template} from "../types.js";
import {Tile} from "../core/index.js";
import {swap} from "../utils/index.js";


export class Bag {
    private static instance: Bag;
    private tiles: Tile[] = [];

    private constructor() {
        template.forEach((item) => {
            for(let i = 0; i < item.num; i++) {
                this.tiles.push(new Tile(item.letter, item.val));
            }
        })
    }

    public static getInstance(): Bag {
        if(!Bag.instance) {
            Bag.instance = new Bag();
        }
        return Bag.instance;
    }

    public isEmpty(): boolean {
        return this.count() === 0;
    }

    public count(): number {
        return this.tiles.length;
    }

    public drawTile() : Tile | undefined  {
        if(this.tiles.length === 0) return undefined;
        let tileIndex = Math.floor(Math.random() * this.tiles.length);
        this.tiles = swap(this.tiles, tileIndex)
        return this.tiles.pop()!;
    }
}