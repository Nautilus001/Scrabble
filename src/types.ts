import type {Tile} from "./core/index.js";

export enum Layout { STANDARD, RANDOM };

export enum Square{ W3, W2, L3, L2, HOME, CLEAR, PLACED }

export type Move = { word: string | Tile[], row: number, column: number, direction: Direction }

export enum Direction { VERTICAL = "V", HORIZONTAL = "H" }

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