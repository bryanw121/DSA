class Node {
    constructor(value, priority){
    this.value = value;
    this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        if (this.values.length===1) {
            return newNode;
        }
        
        let index = this.values.length-1;
        let parentIndex = Math.floor((index-1)/2);
        while (this.values[index].priority<this.values[parentIndex].priority){
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
            index = parentIndex;
            parentIndex = Math.floor((index-1)/2);
        }
        return this
    }
    dequeue() {
        if (this.values.length===0) return null;
        if (this.values.length===1) {
            let removed = this.values.pop();
            return removed
        }
        let lastIndex = this.values.length-1;
        [this.values[0], this.values[lastIndex]] = [this.values[lastIndex], this.values[0]]
        let removed = this.values.pop();
        let index = 0, leftChildIndex = 2*index + 1, rightChildIndex = 2*index + 2, minChildIndex;
        if (this.values[leftChildIndex] && this.values[rightChildIndex]) {
            if (this.values[leftChildIndex].priority<this.values[rightChildIndex].priority) minChildIndex = leftChildIndex;
            else minChildIndex = rightChildIndex;
        } else if (this.values[leftChildIndex]) minChildIndex = leftChildIndex
        else return removed

        while (this.values[index].priority > this.values[minChildIndex].priority) {
            [this.values[index], this.values[minChildIndex]] = [this.values[minChildIndex], this.values[index]];
            index = minChildIndex

            leftChildIndex = 2*index + 1, rightChildIndex = 2*index + 2;
            if (this.values[leftChildIndex] && this.values[rightChildIndex]) {
                if (this.values[leftChildIndex].priority<this.values[rightChildIndex].priority) minChildIndex = leftChildIndex;
                else minChildIndex = rightChildIndex;
            } else if (this.values[leftChildIndex]) minChildIndex = leftChildIndex
            else break

        }
        return removed
    }
}

priority = new PriorityQueue()
priority.enqueue(0,1)
priority.enqueue(0,10)
priority.enqueue(0,5)
priority.enqueue(0,3)
priority.enqueue(0,4)
priority.enqueue(0,30)
priority.dequeue()
priority.dequeue()
priority.dequeue()
priority.dequeue()


console.log(priority)

