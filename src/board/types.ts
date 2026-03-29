import type {Tile} from "../core/index.js";
import {Square} from "../types.js";

export interface IBoard {
    grid: (Square | Tile) [][];
}

export const SCRABBLE_BOARD: Square[][] = [
  [Square.W3, Square.CLEAR, Square.CLEAR, Square.L2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.W3, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L2, Square.CLEAR, Square.CLEAR, Square.W3],
  [Square.CLEAR, Square.W2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L3, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L3, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.W2, Square.CLEAR],
  [Square.CLEAR, Square.CLEAR, Square.W2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L2, Square.CLEAR, Square.L2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.W2, Square.CLEAR, Square.CLEAR],
  [Square.L2, Square.CLEAR, Square.CLEAR, Square.W2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.W2, Square.CLEAR, Square.CLEAR, Square.L2],
  [Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.W2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.W2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.CLEAR],
  [Square.CLEAR, Square.L3, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L3, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L3, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L3, Square.CLEAR],
  [Square.CLEAR, Square.CLEAR, Square.L2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L2, Square.CLEAR, Square.L2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L2, Square.CLEAR, Square.CLEAR],
  [Square.W3, Square.CLEAR, Square.CLEAR, Square.L2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.HOME, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L2, Square.CLEAR, Square.CLEAR, Square.W3],
  [Square.CLEAR, Square.CLEAR, Square.L2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L2, Square.CLEAR, Square.L2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L2, Square.CLEAR, Square.CLEAR],
  [Square.CLEAR, Square.L3, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L3, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L3, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L3, Square.CLEAR],
  [Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.W2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.W2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.CLEAR],
  [Square.L2, Square.CLEAR, Square.CLEAR, Square.W2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.W2, Square.CLEAR, Square.CLEAR, Square.L2],
  [Square.CLEAR, Square.CLEAR, Square.W2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L2, Square.CLEAR, Square.L2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.W2, Square.CLEAR, Square.CLEAR],
  [Square.CLEAR, Square.W2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L3, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L3, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.W2, Square.CLEAR],
  [Square.W3, Square.CLEAR, Square.CLEAR, Square.L2, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.W3, Square.CLEAR, Square.CLEAR, Square.CLEAR, Square.L2, Square.CLEAR, Square.CLEAR, Square.W3],
];