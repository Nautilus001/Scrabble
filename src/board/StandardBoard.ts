import {SCRABBLE_BOARD} from "./types.js";
import type {Tile} from "../core/index.js";
import type {Square} from "../types.js";
import {BaseBoard} from "./BaseBoard.js";

export class StandardBoard extends BaseBoard {
    initGrid(): (Square | Tile)[][] {
        return SCRABBLE_BOARD;
    }
}