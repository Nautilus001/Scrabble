import {SCRABBLE_BOARD} from "./constants/board.js";
import {Tile} from "./tile.js";
import {Direction, Layout, Square} from "./types.js";

export class Board {
    private grid: (Square | Tile)[][];

    constructor(style: Layout, w: number = 15, h: number = 15) {
        this.grid = this.initGrid(style, w, h);
    }

    private initGrid(style: Layout, w: number = 15, h: number = 15): (Square | Tile)[][] {
        let board: Square[][] = Array.from(Array(h), () => new Array(w).fill(Square.CLEAR));  
        for(let i = 0; i < w; i++) {
            for(let j = 0; j < h; j++) {
                if(style === Layout.RANDOM) {
                    let squareType: Square = pickRandomSquare();

                    if(i === 7 && j === 7) squareType = Square.HOME;

                    board[i]![j] = squareType;
                } else {
                    return SCRABBLE_BOARD;
                }
                
            }
        }
        return board;
    }

    canPlaceWord(word: string, row: number, col: number, direction: Direction): boolean {
        if(direction === "H" && col + word.length > 15) return false;
        if(direction === "V" && row + word.length > 15) return false;

        for (let i = 0; i < word.length; i++) {
            const r = direction === Direction.VERTICAL ? row + i : row;
            const c = direction === Direction.HORIZONTAL ? col + i : col;
            const existing = this.grid[r]![c];
            
            if (existing instanceof Tile && existing.letter !== word[i]) {
                return false; 
            }
        }
        return true;
    }

    toString() {
        return this.grid.map((row: any[]) => {
            return row.map(cell => {

                if (cell instanceof Tile) {
                    return cell.toString(true);
                }

                switch (cell) {
                    case Square.W3:    return "[W3]";
                    case Square.W2:    return "[W2]";
                    case Square.L3:    return "[L3]";
                    case Square.L2:    return "[L2]";
                    case Square.HOME:  return "[**]";
                    case Square.CLEAR: return "[  ]";
                    default:           return "[??]";
                }
            }).join(""); 
        }).join("\n");  
    }
}



function pickRandomSquare() {
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
