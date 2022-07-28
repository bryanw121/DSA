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
    unshift(val) {
        newNode = new Node(val);
        if (this.length===0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }
    get(index) {
        if (index<0 || index>this.length-1) return false;
        if (index < this.length/2){
            let count = 0;
            let current = this.head;
            while (count != index) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            let count = this.length - 1;
            let current = this.tail;
            while (count!= index) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }
    set(value, index) {
        let currentNode = this.get(index)
        currentNode.val = value;
        return !!this.get(index)
    }
    insert(value, index) {
        if (index<0 || index>this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);

        let newNode = new Node(value);
        let prevNode = this.get(index-1);
        let tempNode = prevNode.next;

        prevNode.next = newNode, newNode.prev = prevNode;
        newNode.next = tempNode, tempNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index<0 || index >= this.length) return false;
        if (index === this.length-1) return this.pop();
        if (index === 0) return this.shift();

        else {
            let prevNode = this.get(index-1);
            let currentNode = prevNode.next;
            let tempNode = currentNode.next;

            prevNode.next = tempNode, tempNode.prev = prevNode;
            currentNode.prev = null, currentNode.next = null;

            this.length--;
            return currentNode;
        }
    }
    reverse(){
        let currentNode = this.head;
        let prevNode = null;
        let tempNode;
        
        while (currentNode) {
            tempNode = currentNode.next;
            if (prevNode) prevNode.prev = currentNode;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = tempNode;
        }
        [this.head, this.tail] = [this.tail, this.head];
        return this;
        
    }
}

let list = new DoublyLinkedList;

list.push(3)
list.push(5)
list.push(6)
list.insert(10, 1)
list.remove(1)
console.log(list)