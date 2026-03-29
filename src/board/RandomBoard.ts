import type {Tile} from "../core/index.js";
import {Square} from "../types.js";
import {BaseBoard} from "./BaseBoard.js";

export class RandomBoard extends BaseBoard {
    initGrid(w: number = 15, h: number = 15): (Square | Tile)[][] {
        let board: Square[][] = Array.from(Array(h), () => new Array(w).fill(Square.CLEAR));  
        for(let i = 0; i < w; i++) {
            for(let j = 0; j < h; j++) {
                let squareType: Square = this.pickRandomSquare();
                if(i === 7 && j === 7) squareType = Square.HOME;
                board[i]![j] = squareType;
            }
        }
        return board;
    }
}