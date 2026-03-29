import {Tile} from "../core/index.js";
import type {Game} from "../game/Game.js";
import {Direction, type Move} from "../types.js";
import type {IMoveRule} from "./index.js";

export class PlacementRule implements IMoveRule {
    name: string = "PlacementRule";
    validate(game: Game,  move: Move){
        if(move.direction === "H" && move.column + move.word.length > 15) return false;
        if(move.direction === "V" && move.row + move.word.length > 15) return false;
    
        for (let i = 0; i < move.word.length; i++) {

            //check placement direction
            const r = move.direction === Direction.VERTICAL ? move.row + i : move.row;
            const c = move.direction === Direction.HORIZONTAL ? move.column + i : move.column;

            //check if the existing tile (if any) matches what needs to go there
            const existing = game.board.grid[r]![c];
            const letter = typeof move.word === "string" ? move.word[i] : move.word[i]?.letter;
            
            if (existing instanceof Tile && (existing.letter !== letter)) {
                return false; 
            }
        }
        return true;
    }
    
}