const binTree = require('./binaryclass.js');

const bst = new binTree();

// Height of a BST

function height(node) {
  if (!node) {
    return 0;
  }
  let heightLeft = height(node.left);
  let heightRight = height(node.right);

  return Math.max(heightLeft, heightRight) + 1;
}

const main = function() {
  bst.insert(3);
  bst.insert(1);
  bst.insert(4);
  bst.insert(6);
  bst.insert(9);
  bst.insert(2);
  bst.insert(5);
  bst.insert(7);

  bst.remove(3);

  //console.log(height(bst));

  //console.log(bst);
};

main();

// BST
// Given the following data 3,1,4,6,9,2,5,7. If you were to insert
// this into an empty Binary Search Tree, how would the tree look like?
//(Draw the tree, no coding needed here)

//                         3
//                 1             4
//                      2    5       6
//                                       9
//                                   7
//

// Remove Root

//                        4
//                   1         6
//                       2   5     9
//                             7
