/**
 * Taken from TOP: https://www.theodinproject.com/lessons/javascript-binary-search-trees
 * @module prettyPrint
 * @param {Node} node
 * @param {string} prefix
 * @param {bool} isLeft
 */
export default function prettyPrint(node, prefix = '', isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};
