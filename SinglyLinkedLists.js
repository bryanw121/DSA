// Singly linked lists

// push function

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
}

let linkedList = new SinglyLinkedList()
linkedList.push(2)
linkedList.push(11)
linkedList.push(13)
console.log(linkedList)