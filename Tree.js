import Node from './Node.js';

/**
 * @module Tree
 */
export default class Tree {
  /**
   * @param {array} arr, should be sorted
   */
  constructor(arr) {
    this.arr = arr;
  }

  /**
   *
   * @param {*} node
   * @return {*}
   */
  static nextMinValue(node) {
    let minVal = node.data;
    while (node.left != null) {
      minVal = node.left.data;
      node = node.left;
    }
    console.log(minVal);
    return minVal;
  }

  /**
   * @param {array} arr
   * @param {int} start
   * @param {int} end
   * @return {Node}
   */
  buildTree(arr = this.arr, start = 0, end = arr.length - 1) {
    if (start > end) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);
    const node = new Node(
        arr[mid],
        this.buildTree(arr, start, mid - 1),
        this.buildTree(arr, mid + 1, end),
    );
    return node;
  }

  /**
   * @param {*} value
   * @param {Node} root
   * @return {Node}
   */
  static insert(value, root) {
    if (root === null) {
      root = new Node(value);
      return root;
    }
    if (value < root.data) {
      root.left = this.insert(value, root.left);
    } else if (root.data < value) {
      root.right = this.insert(value, root.right);
    }
    return root;
  }

  /**
   * @param {*} value
   * @param {Node} root
   * @return {Node}
   */
  static delete(value, root) {
    if (!root) {
      return null;
    }

    if (value < root.data) {
      root.left = this.delete(value, root.left);
    } else if (root.data < value) {
      root.right = this.delete(value, root.right);
    } else {
      // Case where root has 0-1 children:
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      // Case where root has 2 children:
      root.data = Tree.nextMinValue(root.right);
      root.right = this.delete(root.data, root.right);
    }
    return root;
  }
}
