import { Tree, prettyPrint } from "./binarySearchTree.js";


const values = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = Tree(values);


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

console.log(`\nheight: ${tree.height(8)}`);
console.log(`\nheight: ${tree.height(4)}`);
console.log(`\nheight: ${tree.height(1)}`);
console.log(`\nheight: ${tree.height(3)}`);

console.log(`\ndepth: ${tree.depth(8)}`);
console.log(`\ndepth: ${tree.depth(4)}`);
console.log(`\ndepth: ${tree.depth(1)}`);
console.log(`\ndepth: ${tree.depth(3)}`);

console.log(`\nis balanced: ${tree.isBalanced()}`);


tree.insert(2);
tree.insert(400);
tree.insert(33);
tree.deleteItem(2);
tree.rebalance();

prettyPrint(tree.getRoot());

console.log(`\nis balanced: ${tree.isBalanced()}`);