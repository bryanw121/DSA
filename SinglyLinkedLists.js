// Singly linked lists

// push, pop, shift, unshift, insert, remove, and reverse functions

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
        } else {
            let prevNode = this.head;
            let currentNode = prevNode.next;
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
            return true;
        } else return false;
    }
    insert(value, index) {
        if (index === 0) return !!this.unshift(value);
        else if (index === this.length) return !!this.push(value);
        if (index<0 || index>this.length) return false;
        else {
            let newNode = new Node(value)
            let prevNode = this.get(index-1)
            let tempNode = prevNode.next
            prevNode.next = newNode;
            newNode.next = tempNode;
            this.length ++;
            return true;
        }
    }
    remove(index) {
        if (index === 0) return !!this.shift();
        else if (index === this.length-1) return !!this.pop();
        if (index<0 || index>=this.length) return false;
        else {
            let prevNode = this.get(index-1);
            let tempNode = prevNode.next;
            prevNode.next = tempNode.next;
        }
        this.length --;
        return true;

    }
    reverse() {
        [this.head, this.tail] = [this.tail, this.head];
        let prevNode = this.tail
        let currentNode = prevNode.next;
        this.tail.next = null;
        
        
        for (let i=0;i<this.length-1; i++) {
            
            let tempNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = tempNode;
        }
        this.print(this)
        
        return this;
    }

    print() {
        let array = [];
        let current = this.head;
        while (current) {
            array.push(current.val);
            current = current.next;
        }
        console.log(array)
    }


}

let linkedList = new SinglyLinkedList()
linkedList.push(2)
linkedList.push(11)
linkedList.push(13)
linkedList.push(4)
console.log(linkedList.reverse())
// console.log(linkedList)
