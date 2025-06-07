// import { Player } from "./player.js";
// import { GameBoard } from "./gameBoard.js";
// import { GameController } from "./gameController.js";
import { DisplayController } from "./displayController.js";

window.addEventListener("DOMContentLoaded", () => { // Wait for the entire DOM to load before running the code.
    DisplayController.bindEvents();
    DisplayController.render();
})

console.log("main.js loaded");