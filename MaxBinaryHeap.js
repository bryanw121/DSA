class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(value) {
        this.values.push(value);
        if (this.values.length === 1) return this;
        let index = this.values.length-1;
        let parentIndex = Math.floor((index-1)/2);

        while (this.values[index]>this.values[parentIndex]) {
            [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
            index = parentIndex;
            parentIndex = Math.floor((index-1)/2);
        }
        return this
    }
    extractMax() {
        if (this.values.length === 0) return null;

        // popping the largest value here
        let lastIndex = this.values.length - 1;
        [this.values[0], this.values[lastIndex]] = [this.values[lastIndex], this.values[0]];
        const removedElement = this.values.pop(); 

        let parentIndex = 0;
        let leftChildIndex = parentIndex*2+1, rightChildIndex = parentIndex*2+2
        let maxChildIndex, maxChildElement, parentElement = this.values[parentIndex]

        if (this.values[leftChildIndex]>this.values[rightChildIndex]) maxChildIndex = leftChildIndex
        else {maxChildIndex = rightChildIndex;}

        maxChildElement = this.values[maxChildIndex];
        
 
        while (parentElement<maxChildElement) {
            // swapping the values of the parent and child nodes
            [this.values[parentIndex],this.values[maxChildIndex]] = [this.values[maxChildIndex], this.values[parentIndex]]

            parentIndex = maxChildIndex;
            leftChildIndex = parentIndex*2+1;
            rightChildIndex = parentIndex*2+2;

            // assigning maxChildIndex
            if (this.values[leftChildIndex]>this.values[rightChildIndex]) maxChildIndex = this.values[leftChildIndex]
            else maxChildIndex = this.values[rightChildIndex];

            // assigning both parentElement and maxChildElement for the next comparison
            parentElement = this.values[parentIndex]
            if (this.values[maxChildIndex]) maxChildElement = this.values[maxChildIndex];
            else break;
        }
        return removedElement;

    }
}

let heap = new MaxBinaryHeap ()

heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
heap.extractMax()
console.log(heap)