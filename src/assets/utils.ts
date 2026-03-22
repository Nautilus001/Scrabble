import type {Tile} from "../tile.js";
import * as fs from 'fs';

import * as readline from 'readline';

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

export enum BoardType {NORMAL, RANDOM};

export enum Square{
    W3,
    W2,
    L3,
    L2,
    HOME,
    CLEAR,
    PLACED,
}

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

export function swap(tiles: Tile[], i: number): Tile[] {
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
