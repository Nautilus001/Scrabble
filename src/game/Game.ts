import {Dictionary, Tile, Bag} from "../core/index.js"
import type {Player} from "../player/Player.js";
import {InputHandler} from "../input_handler/InputHandler.js";
import { BoardFactory, type IBoard } from "../board/index.js";
import {Direction, Layout, type Move} from "../types.js";
import {parseDirection} from "../utils/index.js";
import {Validator} from "../validator/index.js";

export class Game {
    public dict: Dictionary = new Dictionary([""]);
    public bag: Bag = Bag.getInstance();
    public players: Player[] = [];
    public board: IBoard;
    public gameBoard: Tile[][] = [];
    public boardLayout: Layout = Layout.STANDARD;
    public inputHandler: InputHandler = new InputHandler();
    
    constructor() {
        this.fillPlayerHands();
        this.board = BoardFactory.createBoard(this.boardLayout);
    }

    private fillPlayerHands() {
        this.players.forEach((player) => {
            player.fillHand(this.bag);
        });
    }

    //refactor this out at some point
    async getMove(player: Player) : Promise<Move> {
        const word = await this.inputHandler.getResponse(
            "Word to play: ",
            (resp) => {
                if(this.dict.check(resp) && player.canPlay(resp)) return true; 
                else return false;
            },
            "Please try another word"
        );
        const row = await this.inputHandler.getResponse(
            "Row to place in: ",
            (resp) => {
                return true;
                //TODO - IMPLEMENT CHECK COORDS
            },
            "Please try another row"
        );
        const col = await this.inputHandler.getResponse(
            "Column",
            (resp) => {
                return true;
                //TODO - IMPLEMENT CHECK COORDS
            },
            "Please try another column"
        );
        const direction = await this.inputHandler.getResponse(
            "Direction? (H/V)",
            (resp) => {
                if(parseDirection(resp)) return true;
                return false;
                //TODO - IMPLEMENT CHECK DIRECTION is valid
            },
            "Please try another Direction"
        );
        
        return {word: word, row: parseInt(row), column: parseInt(col), direction: parseDirection(direction) as Direction};
    }
}

