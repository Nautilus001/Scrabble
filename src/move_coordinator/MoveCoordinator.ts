import {InputHandler} from "../input_handler/InputHandler.js";
import type {Player} from "../player/Player.js";
import {type Move, Direction} from "../types.js";
import {Validator} from "../validator/index.js";
import { parseDirection } from "../utils/index.js";
import type {Game} from "../game/Game.js";

export class MoveCoordinator {
    private validator: Validator = new Validator();
    private inputHandler: InputHandler = new InputHandler();
    async getMove(game: Game) : Promise<Move> {
        const word = await this.inputHandler.getResponse("Word to play: ", (resp) => {
            return this.validator.isValid(game, {word: resp, row: 0, column: 0, direction: Direction.HORIZONTAL}, ["DictRule"]);
        });
        const row = parseInt(await this.inputHandler.getResponse("Word to play: ", (resp) => {
            return this.validator.isValid(game, {word: resp, row: row, column: 0, direction: Direction.HORIZONTAL}, ["DictRule"]);
        }));
        const column = parseInt(await this.inputHandler.getResponse("Word to play: ", (resp) => {
            return this.validator.isValid(game, {word: resp, row: row, column: 0, direction: Direction.HORIZONTAL}, ["DictRule"]);
        }));
        const direction = parseDirection(await this.inputHandler.getResponse("Word to play: ", (resp) => { //ensure this doesnt end up as null;
            return this.validator.isValid(game, {word: resp, row: row, column: 0, direction: Direction.HORIZONTAL}, ["DictRule"]);
        }));
        return {word: word, row: row, column: column, direction: direction!}
    }
}