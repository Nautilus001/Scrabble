//game loop
//bag of letters
//dictionary

import {GameBuilder} from "./gamebuilder.js";
import {Player} from "./player.js";
import {Layout} from "./types.js";
import { stringArrFromFileSync } from "./utils/fileIO.js";
//board


const player1 = new Player();

const game = new GameBuilder()
                .addPlayer(player1)
                .addDictionary(stringArrFromFileSync("./assets/dictionary.txt"))
                .addBoardType(Layout.NORMAL)
                .build();

console.log(player1.toString());
console.log(game.bag.toString());
console.log(game.dict.check("Xylophone"));
console.log(game.dict.check("PEANUT"));
console.log(await game.inputHandler.ask("Working? (Y/N): "));