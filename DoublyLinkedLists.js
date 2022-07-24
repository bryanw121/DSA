// Doubly linked lists

// push,

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }
    pop() {
        if (this.length===0) return undefined;
        
        let tempNode = this.tail;

        if (this.length===1) {
            this.head = null;
            this.tail = null;
        }
        
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            tempNode.prev = null; 
        }
        this.length --;
        return tempNode;
    }
    shift() {
        if (this.length===0) return undefined;

        let tempNode = this.head;
        if (this.length===1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            tempNode.next = null;
        }
        this.length --;
        return tempNode;

    }
}

let list = new DoublyLinkedList;

list.push(3)
list.push(5)
list.push(6)
list.pop()
console.log(list)