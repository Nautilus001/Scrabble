import { Tile } from "../core/index.js";
import { Square } from "../types.js";
import { type IBoard } from "../board/index.js";
import {TileRenderer} from "./TileRenderer.js";

export class BoardRenderer{
    private tilePainter = new TileRenderer();

    renderAsText(board: IBoard) {
        console.log(board.grid.map((row: (Square | Tile)[]) => {
            return row.map(cell => {

                if (cell instanceof Tile) {
                    this.tilePainter.renderAsText(cell, true);
                }

                switch (cell) {
                    case Square.W3:    return "[W3]";
                    case Square.W2:    return "[W2]";
                    case Square.L3:    return "[L3]";
                    case Square.L2:    return "[L2]";
                    case Square.HOME:  return "[**]";
                    case Square.CLEAR: return "[  ]";
                    default:           return "[??]";
                }
            }).join("")
        }).join("\n"))
    }
}