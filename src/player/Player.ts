import type {Bag, Tile} from "../core/index.js";
import {swap} from "../utils/index.js";

export class Player {
    private hand: Tile[] = [];
    public name: string = "";
    public score: number = 0;

    atCap(): boolean {
        return this.hand.length >= 7;
    }

    fillHand(bag: Bag): Tile[] {
        while (!this.atCap) {
            this.addToHand(bag);
        }
        return this.hand;
    }

    addToHand(bag: Bag): Player {
        let tile = bag.drawTile()
        if(tile) this.hand.push(tile);
        else console.log("addToHand got a null response from drawTile()");
        return this;
    }

    addToScore(num: number): Player {
        this.score += num;
        return this;
    }

    public getHand(): Tile[] {
        return [...this.hand];
    }

    canPlay(word: string) : boolean {
        let letters = this.hand.map((tile) => {
            return tile.letter;
        });

        for(let char of word) {
            const index = letters.indexOf(char);
            if (index === -1) return false;
            swap(letters, index);
            letters.pop();
        }

        return true;
    }

    plays(tiles: Tile[]) : Tile[] | null{
        const temp: Tile[] = [];
        tiles.forEach((tile) => {
            const ind = this.hand.indexOf(tile);
            if(ind !== -1) { 
                swap(this.hand, ind)
                temp.push(this.hand.pop()!);
            } else {
                this.hand.concat(temp); //undoes all previous pop's
                return null;
            }
        });
        return temp!;
    }
}