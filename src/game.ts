import {Dictionary} from "./dictionary.js"
import {Bag} from "./bag.js"
import type {Player} from "./player.js";
import {Tile} from "./tile.js";
import {InputHandler} from "./inputhandler.js";
import {Board} from "./board.js";
import {Layout} from "./types.js";

export class Game {
    public dict: Dictionary = new Dictionary([""]);
    public bag: Bag = new Bag();
    public players: Player[] = [];
    public board: Board;
    public gameBoard: Tile[][] = [];
    public boardLayout: Layout = Layout.NORMAL;
    public inputHandler: InputHandler = new InputHandler();
    
    constructor() {
        this.fillPlayerHands();
        this.board = new Board(Layout.NORMAL, 15, 15);
    }

    private fillPlayerHands() {
        this.players.forEach((player) => {
            while (!player.atCap()) {
                player.addToHand(this.bag);
            }
        });
    }

    async getMove(player: Player)  {
        let flag = false;
        while (!flag) {
            let word = await this.inputHandler.ask("Word to play: ");
            if (this.dict.check(word) && player.canPlay(word)) flag = true;
        }
        flag = false;
        while (!flag) {
            let word = await this.inputHandler.ask("Where to play [row, column]: ");
            if ( true ) flag = true; //MUST CHANGE THIS TO SQUARE VALIDATION!
        }
        //IN PROGRESS -- REFACTOR  INTO 3 METHODS: getWord, getCell, getDirection.
    }

    

    toString(): string {
        let game = [];
        let players: string[] = [];
        this.players.forEach((player) => {
            players.push(player.toString());
        });
        game.push(`Players:\n${players.join("")}`);
    
        game.push("\nBoard:\n");
        game.push(this.board.toString());
        return game.join("");
    }
}

