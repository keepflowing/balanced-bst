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
}
