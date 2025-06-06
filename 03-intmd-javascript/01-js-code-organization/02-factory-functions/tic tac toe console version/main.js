import { Player } from "./player.js";
import { GameBoard } from "./gameBoard.js";
import { GameController } from "./gameController.js";
import { DisplayController } from "./displayController.js";

window.addEventListener("DOMContentLoaded", () => {
    DisplayController.bindEvents();
    DisplayController.render();
})

console.log("main.js loaded");