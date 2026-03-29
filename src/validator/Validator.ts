import type {IMoveRule} from "./index.js";
import type {Game} from "../game/Game.js";
import type {Move} from "../types.js";
import {DictionaryRule} from "./DictionaryRule.js";
import {PlacementRule} from "./PlacementRule.js";

export class Validator {
    public rules: IMoveRule[] = [];

    constructor() {
        this.rules.push(new DictionaryRule());
        this.rules.push(new PlacementRule());
    }

    public isValid(game: Game, move: Move, rulesToCheck : string[] = []) : boolean {
        this.rules.forEach((rule) => {
            if(rulesToCheck.length === 0 || rulesToCheck.includes(rule.name)) {
                if (!rule.validate(game, move)) return false;
            }
        });
        return true;
    }
}