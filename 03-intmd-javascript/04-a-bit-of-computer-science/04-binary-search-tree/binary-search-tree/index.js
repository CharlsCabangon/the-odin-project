import { Tree, prettyPrint } from "./binarySearchTree.js";


const values = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = Tree(values);


// tree.insert(2);
// tree.insert(400);
// tree.deleteItem(2);

prettyPrint(tree.getRoot());
console.log(tree.findMin());
console.log(tree.find(1));

console.log("\nLevel-order traversal:");
tree.levelOrderForEach(node => console.log(node.data));

console.log("\nIn-order traversal:");
tree.inOrderForEach(node => console.log(node.data));

console.log("\nPre-order traversal:");
tree.preOrderForEach(node => console.log(node.data));

console.log("\nPost-order traversal:");
tree.postOrderForEach(node => console.log(node.data));