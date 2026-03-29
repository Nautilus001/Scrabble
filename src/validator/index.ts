import type {Game} from "../game/Game.js";
import type {Move} from "../types.js";

export interface IMoveRule {
    name: string;
    validate(gameState: Game, move:Move): boolean;
}

export { Validator } from "./Validator.js";