class Node {
  constructor(x) {
    this.val = x;
    this.left = null;
    this.right = null;
  }
}

// Big O Time is O(n) and space complexity is O(log n)
const isValidBST = node => helper(node, -Infinity, Infinity);

const helper = (node, lower, upper) => {
  if (!node) return true;
  let val = node.val;
  if (val <= lower || val >= upper) return false;

  // Right traversing
  if (!helper(node.right, val, upper)) return false;
  // Left traversing
  if (!helper(node.left, lower, val)) return false;

  return true;
};

// First
let node = new Node(5);
node.left = new Node(4);
node.right = new Node(7);
console.log(isValidBST(node));

// Second
let node2 = new Node(5);
node2.left = new Node(1);
node2.right = new Node(4);
node2.right.left = new Node(3);
node2.right.right = new Node(6);
console.log(isValidBST(node2));

// Third
let node3 = new Node(5);
node3.left = new Node(4);
node3.right = new Node(7);
node3.right.left = new Node(6);
node3.right.right = new Node(8);
console.log(isValidBST(node3));
