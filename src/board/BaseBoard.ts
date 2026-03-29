import {Tile} from "../core/index.js";
import {Square} from "../types.js";
import type {IBoard} from "./types.js";

export abstract class BaseBoard implements IBoard {
    public grid: (Square | Tile)[][];

    constructor (w: number, h: number) {
        this.grid = this.initGrid(w, h);
    }

    abstract initGrid(w: number, h: number): (Square | Tile) [][];

    protected pickRandomSquare() {
        const seed = Math.floor(Math.random() * 10);
        let squareType: Square;
        if (seed >= 9) {
            squareType = Square.W3;
        } else if (seed >= 8) {
            squareType = Square.W2;
        } else if (seed >= 6) {
            squareType = Square.L3;
        } else if (seed >= 4) {
            squareType = Square.L2;
        } else {
            squareType = Square.CLEAR;
        }
        return squareType;
    }
}