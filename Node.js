/**
 * @module Node
 */
export default class Node {
  /**
   * @param {*} data
   */
  constructor(data = null) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
