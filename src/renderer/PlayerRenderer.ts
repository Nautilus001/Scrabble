import {Player} from "../player/Player.js";

export class PlayerRenderer{
    renderAsText(player: Player) {
        let arr: string[] = ["PLAYER \n\tHand: {"];
        for(let tile of player.getHand()) {
            arr.push(tile.letter);
        }
        arr.push(`} | Score: ${player.score}`);
        console.log(arr.join(""));
    }
}