class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let tempNode = this.root;

        while (true) {
            if (value === tempNode.val) return undefined;
            if (newNode.val<tempNode.val){
                if (tempNode.left) {
                    tempNode = tempNode.left;
                } else {
                    tempNode.left = newNode;
                    break
                }
            } else {
                if (tempNode.right) {
                    tempNode = tempNode.right;
                } else {
                    tempNode.right = newNode;
                    break
                }
            }
        }
        return this
    }
    find(value) {
        if (!this.root) return false;
        let tempNode = this.root;

        while (value != tempNode.val) {
            if (value > tempNode.val) {
                if (tempNode.right) {
                    tempNode = tempNode.right;
                } else {
                    return false;
                }
            } else if (value < tempNode.val) {
                if (tempNode.left) {
                    tempNode = tempNode.left;
                } else {
                    return false
                }
            }
        } return tempNode;
    }
    BFS() {
        let queue = [];
        let storedValues = [];
        let tempNode = this.root;
        

        queue.push(tempNode);
        
        while (queue.length>0){
            tempNode = queue.shift();
            storedValues.push(tempNode.val);
            if (tempNode.left) {
                queue.push(tempNode.left)
            } 
            if (tempNode.right) {
                queue.push(tempNode.right)
            } 
        }
        return storedValues;

    }
    DFSPreOrder() {
        let queue = [], tempNode = this.root;
        function traverse(tempNode) {
            queue.push(tempNode.val)
            if (tempNode.left) traverse(tempNode.left);
            if (tempNode.right) traverse(tempNode.right);
        }
        traverse(tempNode)
        return queue;
    }
    DFSPostOrder() {
        let queue = [], tempNode = this.root;
        function traverse(tempNode) {
            if (tempNode.left) traverse(tempNode.left);
            if (tempNode.right) traverse(tempNode.right);
            queue.push(tempNode.val)
        }
        traverse(tempNode)
        return queue;
    }
    DFSInOrder() {
        let queue = [], tempNode = this.root;
        function traverse(tempNode) {
            if (tempNode.left) traverse(tempNode.left);
            queue.push(tempNode.val);
            if (tempNode.right) traverse(tempNode.right);
        }
        traverse(tempNode)
        return queue;
    }
}   

let tree = new BinarySearchTree();
tree.insert(13)
tree.insert(10)
tree.insert(19)
tree.insert(20)
tree.insert(7)
tree.insert(12)
console.log(tree.DFSInOrder())
console.log(tree)