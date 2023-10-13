import Tree from './Tree.js';
import prettyPrint from './prettyPrint.js';

const sortedArr = [4, 8, 15, 16, 23, 42];
const tree = new Tree(sortedArr);

const firstNode = tree.buildTree();
prettyPrint(firstNode);

// console.log(Tree.find(23, firstNode));
/* console.log(Tree.levelOrder(firstNode, (node) => {
  console.log(node.data);
}));*/

console.log(Tree.preorder(firstNode));

Tree.preorder(firstNode, (node) => {
  console.log(node.data);
});

console.log(Tree.postorder(firstNode));
Tree.postorder(firstNode, (node) => {
  console.log(node.data);
});
