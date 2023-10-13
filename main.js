import Tree from './Tree.js';
import prettyPrint from './prettyPrint.js';

const sortedArr = [4, 8, 15, 16, 23, 42];
const tree = new Tree(sortedArr);

const firstNode = tree.buildTree();
Tree.insert(2, firstNode);
Tree.insert(1, firstNode);
Tree.insert(3, firstNode);
prettyPrint(firstNode);
// console.log(Tree.find(23, firstNode));
console.log(Tree.levelOrder(firstNode, (node) => {
  console.log(node.data);
}));
