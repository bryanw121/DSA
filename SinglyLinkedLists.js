// Singly linked lists

// push, pop, shift, unshift functions

class Node {
	constructor (val) {
		this.val = val;
		this.next = null;
	}
}
class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        this.length += 1;
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return this
        
    }
    pop() {
        if (this.length === 0) return undefined;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
            return this
        let prevNode = this.head;
        let currentNode = prevNode.next;

        } else {
            while (currentNode) {
                if (this.tail == currentNode){
                    this.tail = prevNode;
                    prevNode.next = null;
                    break
                }
                prevNode = prevNode.next;
                currentNode = prevNode.next;
            }
        }
        this.length --;
        return this
    }
    shift() {
        if (this.length === 0) return undefined;
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
            return this
        }
        this.head = this.head.next;

        this.length --;
        return this;

    }
    unshift(val) {

        let newNode = new Node(val);
        if (this.length === 0 ) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length ++;
        return this;

    }
    get(index) {
        let currentNode = this.head;
        let i = 0;
        if (index<0 || index>this.length-1) return undefined;
        while (i < index) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode;

    }
    set(value, index) {
        let currentNode = this.get(index)
        if (currentNode) {
            currentNode.val = value;
        } else return undefined

        return this;
    }
}

let linkedList = new SinglyLinkedList()
linkedList.push(2)
linkedList.push(11)
linkedList.push(13)
console.log(linkedList.set(100,3))
console.log(linkedList)
