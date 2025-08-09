import { knightMoves } from "./knightsTravails.js";

console.log(knightMoves([0,0], [1,2])); // shortest path: [[0,0],[1,2]]
console.log(knightMoves([0,0], [3,3])); // e.g. [[0,0],[1,2],[3,3]]
console.log(knightMoves([0,0], [7,7]));