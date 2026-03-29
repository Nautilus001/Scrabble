//game loop
//bag of letters
//dictionary

import {GameBuilder} from "./game/GameBuilder.js";
import {Player} from "./player/Player.js";
import {ConsoleRenderer} from "./renderer/ConsoleRenderer.js";
import {Layout} from "./types.js";
import { stringArrFromFileSync } from "./utils/index.js";


const player1 = new Player();

const game = new GameBuilder()
                .addPlayer(player1)
                .addDictionary(stringArrFromFileSync("./src/assets/dictionary.txt"))
                .addBoardType(Layout.STANDARD)
                .build();

const renderer = new ConsoleRenderer();
renderer.render(game);

while(!game.bag.isEmpty()) {
    await game.moveCoordinator.getMove(game);
}