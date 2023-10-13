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
   * Find minimum value that is higher than the node data
   * @param {Node} node
   * @return {*}
   */
  static nextMinValue(node) {
    let minVal = node.data;
    while (node.left != null) {
      minVal = node.left.data;
      node = node.left;
    }
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

  /**
   * Finds and returns node with value in Tree
   * @param {*} value
   * @param {Node} root
   * @return {Node}
   */
  static find(value, root) {
    if (!root) {
      return null;
    }

    if (value < root.data) {
      return find(value, root.left);
    } else if (root.data < value) {
      return this.find(value, root.right);
    }
    return root;
  }

  /**
   * @param {Node} root
   * @param {function} callback
   * @return {arr}
   */
  static levelOrder(root, callback = null) {
    if (!root) {
      return null;
    }
    const queue = [root];
    const result = [];
    while (queue.length) {
      for (let i = 0; i < queue.length; i++) {
        const current = queue.shift();
        result.push(current.data);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
        if (callback) callback(current);
      }
    }
    if (!callback) return result;
  }

  /**
   * root left right
   * @param {Node} node
   * @param {function} callback
   * @return {array}
   */
  static preorder(node, callback = null) {
    if (!node) {
      return null;
    }
    const stack = [node];
    const result = [];
    while (stack.length) {
      const node = stack.pop();
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
      if (callback) callback(node);
      result.push(node.data);
    }
    if (!callback) return result;
  }

  /**
   * left root right
   * @param {Node} node
   * @param {function} callback
   * @param {array} result
   * @return {array}
   */
  static inorder(node, callback = null, result = []) {
    if (!node) {
      return null;
    }
    Tree.inorder(node.left, callback, result);
    if (callback) {
      callback(node);
    } else {
      result.push(node.data);
    }
    Tree.inorder(node.right, callback, result);
    if (!callback) return result;
  }

  /**
   * left right root
   * @param {Node} node
   * @param {function} callback
   * @return {array}
   */
  static postorder(node, callback = null) {
    if (!node) {
      return null;
    }
    const stack = [node];
    let result = [];
    while (stack.length) {
      const node = stack.pop();
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
      result.push(node);
    }
    result = result.reverse();
    if (!callback) {
      const resultValues = [];
      for (let i = 0; i < result.length; i++) {
        resultValues.push(result[i].data);
      }
      return resultValues;
    } else {
      for (let i = 0; i < result.length; i++) {
        callback(result[i]);
      }
    }
  }

  /**
   * @param {Node} node
   * @return {int}
   */
  static height(node) {
    if (!node) {
      return 0;
    }
    const leftHeight = Tree.height(node.left);
    const rightHeight = Tree.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  /**
   * @param {Node} node
   * @param {Node} root
   * @param {int} depth
   * @return {int}
   */
  static depth(node, root, depth = 0) {
    if (!node) {
      return null;
    } else if (!root) {
      return 0;
    }
    if (node.data === root.data) return depth;
    const count = Tree.depth(node, root.left, depth + 1);
    if (count) return count;
    return Tree.depth(node, root.right, depth + 1);
  }

  /**
   * @param {Node} root
   * @return {bool}
   */
  static isBalanced(root) {
    if (!root) return true;

    const heightDiff = Math.abs(
        Tree.height(root.left) - Tree.height(root.right));
    return (
      heightDiff < 2 &&
      Tree.isBalanced(root.left) &&
      Tree.isBalanced(root.right));
  }

  /**
   * @param {Node} root
   * @return {Node}
   */
  rebalance(root) {
    this.arr = Tree.inorder(root);
    return this.buildTree();
  }
}
