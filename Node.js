/**
 * @module Node
 */
export default class Node {
  /**
   * @param {*} data
   * @param {Node} left
   * @param {Node} right
   */
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
