import {Dictionary} from "../core/index.js";
import {Game} from "./Game.js";
import {Player} from "../player/Player.js";
import type {Layout} from "../types.js";

export class GameBuilder {
    private game: Game;

    constructor() {
        this.game = new Game();
    }

    addPlayer(player: Player): GameBuilder {
        this.game.players.push(player);
        return this;
    }

    addBoardType(boardType: Layout) {
        this.game.boardLayout = boardType;
        return this;
    }

    addDictionary(validWords: Dictionary | string[]): GameBuilder{
        if(validWords instanceof Dictionary) this.game.dict = validWords;
        else this.game.dict = new Dictionary(validWords);
        return this;
    }

    build(): Game {
        return this.game;
    }
    
}