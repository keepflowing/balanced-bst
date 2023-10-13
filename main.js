import Tree from './Tree.js';
import prettyPrint from './prettyPrint.js';

const sortedArr = [4, 8, 15, 16, 23, 42];
const tree = new Tree(sortedArr);

const firstNode = tree.buildTree();
prettyPrint(firstNode);

// console.log(Tree.height(firstNode));
console.log(Tree.depth(Tree.find(42, firstNode), firstNode));
