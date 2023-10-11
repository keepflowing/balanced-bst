import Tree from './Tree.js';
import prettyPrint from './prettyPrint.js';

const sortedArr = [4, 8, 15, 16, 23, 42];
const tree = new Tree(sortedArr);
const del = 23;

const firstNode = tree.buildTree();

// Tree.insert(3, firstNode);
prettyPrint(firstNode);

console.log('---------------------------------');
console.log('Deleting: ' + del + '...');
console.log('---------------------------------');

Tree.delete(del, firstNode);
prettyPrint(firstNode);
