import Tree from './Tree.js';
import prettyPrint from './prettyPrint.js';

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tree = new Tree(sortedArr);

const firstNode = tree.buildTree();


prettyPrint(firstNode);
