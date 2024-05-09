// Nodes for the binary search tree
class BSTNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left; // Node to the left
        this.right = right; // Node to the right
    }
}

// Binary search tree itself
class BST {
    constructor() {
        this.root = null; // Topmost node in our binary search tree
    }

    addNode(val) {
        let newNode = new BSTNode(val); // Create new node
        if (this.root == null) { // If the tree is empty, then make this new node the root of the tree and stop
            this.root = newNode; 
            return;
        }
        let runner = this.root; // Point to the current node in the tree
        // While we can travel through the tree
        while (runner != null) {
            // If the value in the new node is bigger than that at the runner, we go to the right
            if (val > runner.data) {
                // If there is NO node to the right, we insert the new node here
                if (runner.right === null) {
                    runner.right = newNode; // Insert the node to the right
                    return; // STOP here
                } else { // Otherwise, we just move the runner down as there already is a node to the right
                    runner = runner.right;
                }
            } else { // If it's smaller, we go to the left
                // If there is NO node to the left, we insert the new node here
                if (runner.left === null) {
                    runner.left = newNode; // Insert the node to the left
                    return; // STOP here
                } else { // Otherwise, we just move the runner down as there already is a node to the left
                    runner = runner.left;
                }
            }
        }
    }

    // Height of the tree - the number of levels in the tree, including the level with the root
    height(runner = this.root) { // Optional parameter specifying which node we're at right now, starting at the root by default
        if (runner == null) { // Stop the recursion if we hit a dead end (no node)
            return 0; // No levels to count if we hit a dead end
        }
        let leftSubtreeHeight = this.height(runner.left); // Get the height of the subtree to the left of the current node (runner) recursively
        let rightSubtreeHeight = this.height(runner.right); // Get the height of the subtree to the right of the current node (runner)
        return Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1; // Pick the bigger height between each tree, then add 1 to count the CURRENT level
    }
}

let myBST = new BST(); // Sample binary search tree
// Demo adding nodes
myBST.addNode(10);
myBST.addNode(25);
myBST.addNode(20);
// Displaying various nodes in the tree
console.log(myBST);
console.log(myBST.root.right);
console.log(myBST.root.right.left);
// Testing with heights
console.log(myBST.height());
myBST.addNode(5);
console.log(myBST.height());