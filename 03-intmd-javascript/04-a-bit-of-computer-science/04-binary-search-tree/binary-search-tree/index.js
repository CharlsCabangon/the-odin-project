import { Tree, prettyPrint } from "./binarySearchTree.js";


const values = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = Tree(values);
prettyPrint(tree.getRoot());