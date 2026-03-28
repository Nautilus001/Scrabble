import type {Tile} from "../tile.js";
import * as fs from 'fs';

import * as readline from 'readline';

export type Move = {word: Tile[], cell: number[], direction: Direction}

export enum Direction {
    VERTICAL = "V",
    HORIZONTAL = "H",
}

export function parseDirection(input: string): Direction | undefined {
    if(Object.values(Direction).includes(input as Direction)) {
        return input as Direction;
    }
    return undefined;
}

export type Board = Array<Array<Square | Tile>>;

export enum Layout {NORMAL, RANDOM};

export enum Square{
    W3,
    W2,
    L3,
    L2,
    HOME,
    CLEAR,
    PLACED,
}

export const template = [
    {letter: "a", num: 9, val: 1},
    {letter: "b", num: 2, val: 3},
    {letter: "c", num: 2, val: 3},
    {letter: "d", num: 4, val: 2},
    {letter: "e", num: 9, val: 1},
    {letter: "f", num: 2, val: 4},
    {letter: "g", num: 3, val: 2},
    {letter: "h", num: 2, val: 4},
    {letter: "i", num: 12, val: 1},
    {letter: "j", num: 1, val: 8},
    {letter: "k", num: 1, val: 5},
    {letter: "l", num: 6, val: 1},
    {letter: "m", num: 2, val: 3},
    {letter: "n", num: 6, val: 1},
    {letter: "o", num: 9, val: 1},
    {letter: "p", num: 2, val: 3},
    {letter: "q", num: 1, val: 10},
    {letter: "r", num: 6, val: 1},
    {letter: "s", num: 4, val: 1},
    {letter: "t", num: 6, val: 1},
    {letter: "u", num: 4, val: 1},
    {letter: "v", num: 2, val: 4},
    {letter: "w", num: 2, val: 4},
    {letter: "x", num: 1, val: 8},
    {letter: "y", num: 2, val: 4},
    {letter: "z", num: 1, val: 10},
]

export const SCRABBLE_BOARD: Board = [
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

export function swap(tiles: string[], i: number): string[] {
    if(i > tiles.length) return tiles;
    let temp = tiles[tiles.length - 1]!;
    tiles[tiles.length - 1] = tiles[i]!;
    tiles[i] = temp;
    return tiles;
}

export function swapTiles(tiles: Tile[], i: number): Tile[] {
    if(i > tiles.length) return tiles;
    let temp = tiles[tiles.length - 1]!;
    tiles[tiles.length - 1] = tiles[i]!;
    tiles[i] = temp;
    return tiles;
}

export function readDictionary(): string[] {
    const filepath = "./src/assets/dictionary.txt";
    let content: string = "";
    try {
        content = fs.readFileSync(filepath, 'utf-8');
    } catch (err){
        console.error(err);
    }
    return content.split("\n");
}
