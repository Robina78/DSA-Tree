/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root) return 0;

    let total = this.root.val;
    
    function sumHelper(node) {
      //go through all the children for a node
      for (let child of node.children) {
        total += child.val;
        if (child.children.length > 0) {
          sumHelper(child);
        }
      }
    }
    sumHelper(this.root);
      return total;       
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function countEvenHelper(node) {
      for (let child of node.children) {
        if(child.val % 2 === 0) count++;
          if(child.children.length > 0) {
            countEvenHelper(child)
          }        
      }
    }
    countEvenHelper(this.root);
    return count;
  }
  
  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0;

    let countGreater = this.root.val > lowerBound ? 1 : 0;

    function countGreaterHelper(node) {
      for(let child of node.children) {
        if(child.val > lowerBound) countGreater++;
          if(child.children.length > 0) {
            countGreaterHelper(child)
          }       
      }
    }
    countGreaterHelper(this.root);
    return countGreater;
  }
}

module.exports = { Tree, TreeNode };
