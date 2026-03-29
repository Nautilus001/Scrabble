import {InputHandler} from "../input_handler/InputHandler.js";
import type {Player} from "../player/Player.js";
import {type Move, Direction} from "../types.js";
import {Validator} from "../validator/index.js";
import { parseDirection } from "../utils/index.js";
import type {Game} from "../game/Game.js";

export class MoveCoordinator { 
    private validator: Validator = new Validator();
    private inputHandler: InputHandler = new InputHandler();

    async getMove(game: Game) : Promise<Move> { //all the logic here is scuffed, rework later.
        
        const word = await this.inputHandler.getResponse("Word to play: ", (resp) => {
            return this.validator.isValid(game, {word: resp, row: 0, column: 0, direction: Direction.HORIZONTAL}, ["DictRule"]);
        });

        const direction = parseDirection(await this.inputHandler.getResponse("Direction To Play: (H/V) ", (resp) => { //ensure this doesnt end up as null;
            const dir = parseDirection(resp);
            if(dir) return this.validator.isValid(game, {word: resp, row: 0, column: 0, direction: dir}, ["DictRule"]);
            else return false;
        }));

        const coords = await this.inputHandler.getResponse("Where to play first letter: (row, column) ", (resp) => { //could use some cleaning up
            let coords = resp.split(",").map((item) => item.trim());
            coords.forEach((item) => {
                if (!parseInt(item)) return false;
            })
            const numberCoords = coords.map((coord) => {
                return parseInt(coord);
            });
            return this.validator.isValid(game, {word: resp, row: numberCoords[0]!, column: numberCoords[1]!, direction: direction!}, ["DictRule"]); // update
        });

        let c = coords.split(",").map((item) => parseInt(item.trim()));

        return {word: word, row: c[0]!, column: c[1]!, direction: direction!}
    }
}