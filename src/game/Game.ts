import {Dictionary, Tile, Bag} from "../core/index.js"
import type {Player} from "../player/Player.js";
import { BoardFactory, type IBoard } from "../board/index.js";
import {Direction, Layout, type Move} from "../types.js";
import {parseDirection} from "../utils/index.js";
import {MoveCoordinator} from "../move_coordinator/index.js";

export class Game {
    public dict: Dictionary = new Dictionary([""]);
    public bag: Bag = Bag.getInstance();
    public players: Player[] = [];
    public board: IBoard;
    public gameBoard: Tile[][] = [];
    public boardLayout: Layout = Layout.STANDARD;
    public moveCoordinator: MoveCoordinator = new MoveCoordinator();   

    constructor() {
        this.fillPlayerHands();
        this.board = BoardFactory.createBoard(this.boardLayout);
    }

    private fillPlayerHands() {
        this.players.forEach((player) => {
            player.fillHand(this.bag);
        });
    }
}

