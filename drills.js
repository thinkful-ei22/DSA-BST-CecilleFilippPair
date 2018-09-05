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

function leftHeight(node) {
  if (!node) {
    return 1;
  }
  return leftHeight(node.left) + 1;

}

function rightHeight(node) {
  if (!node) {
    return 1;
  }
  return rightHeight(node.right) + 1;

}

// is it BST?

function isThisABST(currNode, min, max){
  if (currNode == null) {
    return true;
  }

  return (
    (min == null || min <= currNode.key) &&
    (max == null || max >= currNode.key) &&
    isThisABST(currNode.left, min, currNode.key) &&
    isThisABST(currNode.right, currNode.key, max)
  );
}

// Third largest node

function thirdLargestNode(node, sortedArray=[]) {

  if(node) {
    thirdLargestNode(node.left, sortedArray);
    sortedArray.push(node.key);
    thirdLargestNode(node.right, sortedArray);
  }

  return sortedArray[sortedArray.length-3];
}

//Balanced bst
//Write an algorithm that checks if a BST is balanced (i.e. a tree where no two
//leaves differ in distance from the root by more than one).

//Process

//for a given node - get length of left and right subtree - DONE!
//if the difference is greater than 1
//repeat the process for each of the node in the tree using recursion

const isBalanced = function(node) {
  if(Math.abs(leftHeight(node) - rightHeight(node)) >= 1) {
    return false;
  } else if(node.left){
    isBalanced(node.left);
  } else if(node.right) {
    isBalanced(node.right);
  }
  return true;
}

const main = function() {
  // bst.insert(3);
  // bst.insert(1);
  // bst.insert(4);
  // bst.insert(6);
  // bst.insert(9);
  // bst.insert(2);
  // bst.insert(5);
  // bst.insert(7);
  //
  // bst.remove(3);

  // console.log(height(bst));
  // console.log(rightHeight(bst))
     console.log(isBalanced(bst))
  //console.log(bst);

  //console.log(isThisABST(bst, null, null));

  //console.log(thirdLargestNode(bst));
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
