import type {Game} from "../game/Game.js";
import {BoardRenderer} from "./BoardRenderer.js";
import {PlayerRenderer} from "./PlayerRenderer.js";
import type {IRenderer} from "./types.js";

export class ConsoleRenderer implements IRenderer {
    private boardPainter = new BoardRenderer();
    private playerPainter = new PlayerRenderer();

    render(game: Game) { //long-term maybe try string buffer to reduce jitter
        console.clear();
        console.log("========SCRABBLE GAME========")
        game.players.forEach((player) => {
            this.playerPainter.renderAsText(player);
        })
        this.boardPainter.renderAsText(game.board);
        console.log("=============================")
    }
}