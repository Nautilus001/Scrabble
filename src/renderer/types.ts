import type {Game} from "../game/Game.js";

export interface IRenderer {
    render(game: Game) : void;
}