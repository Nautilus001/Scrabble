import type {Bag} from "./bag.js";
import type {Tile} from "./tile.js";

export class Player {
    private hand: Tile[] = [];
    public name: string = "";
    public score: number = 0;

    atCap(): boolean {
        return this.hand.length >= 7;
    }

    addToHand(bag: Bag): Player {
        this.hand.push(bag.drawTile());
        return this;
    }

    addToScore(num: number): Player {
        this.score += num;
        return this;
    }

    toString(): string {
        let arr: string[] = ["PLAYER \n\tHand: {"];
        for(let tile of this.hand) {
            arr.push(tile.toString());
        }
        arr.push(`} | Score: ${this.score}`);
        return arr.join("");
    }
}