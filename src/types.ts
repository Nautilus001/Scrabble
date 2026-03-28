import type {Tile} from "./tile.js";

export enum Layout { NORMAL, RANDOM };

export enum Square{ W3, W2, L3, L2, HOME, CLEAR, PLACED }

export type Move = { word: Tile[], cell: number[], direction: Direction }

export enum Direction { VERTICAL = "V", HORIZONTAL = "H" }