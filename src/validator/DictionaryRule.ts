import type {IMoveRule} from "./index.js";
import type {Game} from "../game/Game.js";
import type {Move} from "../types.js";

export class DictionaryRule implements IMoveRule {
    name = "DictRule";
    validate(game: Game, move: Move) : boolean{
        let word;
        if(!(typeof move.word === "string")) {
            word = move.word.map((tile) => {
                return tile.letter;
            }).join("");
        } else {
            word = move.word;
        }
        return game.dict.check(word);
    }
}