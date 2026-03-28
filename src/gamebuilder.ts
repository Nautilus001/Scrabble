import type {BoardType} from "./assets/utils.js";
import {Dictionary} from "./dictionary.js";
import {Game} from "./game.js";
import {Player} from "./player.js";

export class GameBuilder {
    private game: Game;

    constructor() {
        this.game = new Game();
    }

    addPlayer(player: Player): GameBuilder {
        this.game.players.push(player);
        return this;
    }

    addBoardType(boardType: BoardType) {
        this.game.boardType = boardType;
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