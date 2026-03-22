//game loop
//bag of letters
//dictionary

import {GameBuilder} from "./gamebuilder.js";
import {Player} from "./player.js";
import {BoardType, readDictionary} from "./assets/utils.js";
//board

let validWords = readDictionary();

const player1 = new Player();

const game = new GameBuilder()
                .addPlayer(player1)
                .addDictionary(validWords)
                .addBoardType(BoardType.NORMAL)
                .build();

game.setUp();




console.log(player1.toString());
console.log(game.bag.toString());
console.log(game.dict.check("Xylophone"));
console.log(game.dict.check("PEANUT"));
console.log(game.toString());

while(!game.bag.isEmpty()) {
    game.players.forEach((player) => {
        let move = game.getMove(player); //currently crashes game
        if(move) console.log(move);
    })
}