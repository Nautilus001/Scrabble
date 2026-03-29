import type {IBoard} from "./types.js";
import { Layout } from "../types.js";
import {RandomBoard} from "./RandomBoard.js";
import {StandardBoard} from "./StandardBoard.js";

export class BoardFactory {
    static createBoard(board: Layout) : IBoard {
        switch (board) {
            case Layout.RANDOM:
                return new RandomBoard(15, 15);
            case Layout.STANDARD:
                return new StandardBoard(15, 15);
            default:
                return new StandardBoard(15, 15);
        }
    }
}








