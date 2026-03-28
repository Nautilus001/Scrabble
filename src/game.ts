import {template} from "./template.js";
import {TreeNode} from "./treenode.js";
import {Dictionary} from "./dictionary.js"
import {Bag} from "./bag.js"
import type {Player} from "./player.js";
import {BoardType, Square, SCRABBLE_BOARD, type Board} from "./assets/utils.js";
import {Tile} from "./tile.js";

export class Game {
    public dict: Dictionary = new Dictionary([""]);
    public bag: Bag = new Bag();
    public players: Player[] = [];
    public board: Board = [];
    public gameBoard: Tile[][] = [];
    public boardType: BoardType = BoardType.NORMAL;

    setUp() {
        this.players.forEach((player) => {
            while(!player.atCap()) {
                player.addToHand(this.bag);
            } 
        });
        this.board = this.genBoard(BoardType.NORMAL);
    }

    genBoard(style: BoardType, w: number = 15, h: number = 15): Board {
        let board: Square[][] = Array.from(Array(h), () => new Array(w).fill(Square.CLEAR));  
        for(let i = 0; i < w; i++) {
            for(let j = 0; j < h; j++) {
                if(style === BoardType.RANDOM) {
                    const seed = Math.floor(Math.random() * 10); 
                    let squareType: Square;
                    if(seed >= 9) {
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
    
                    if(i === 7 && j === 7) squareType = Square.HOME;
                    board[i]![j] = squareType;
                } else {
                    return SCRABBLE_BOARD;
                }
                
            }
        }
        return board;
    }

    toString(): string {
        let game = [];
        let players: string[] = [];
        this.players.forEach((player) => {
            players.push(player.toString());
        });
        game.push(`Players:\n${players.join("")}`);

        const boardString = this.board.map(row => {
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
    
        game.push("\nBoard:\n");
        game.push(boardString);
        return game.join("");
    }
}

