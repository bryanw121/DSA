// Adjacency list
class AdjacencyList {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            const index1 = this.adjacencyList[vertex1].indexOf(vertex2);
            if (index1 > -1) this.adjacencyList[vertex1].splice(index1, 1);
            const index2 = this.adjacencyList[vertex2].indexOf(vertex1);
            if (index2 > -1) this.adjacencyList[vertex2].splice(index2, 1);
        }
    }
    removeVertex(vertex) {
        for (let i=0; i<this.adjacencyList[vertex].length;i++){
            this.removeEdge(vertex, this.adjacencyList[vertex][i])
        }
        delete this.adjacencyList[vertex]
    }
    DFSRecursion(vertex) {
        let res = [];
        let visited = {};
        let adjacencyList = this.adjacencyList

        function DFS(vertex) {
            if (!vertex) return null;
            res.push(vertex);
            visited[vertex] = true;
            adjacencyList[vertex].forEach(element => {
                if (!(element in visited)){
                    DFS(element)
                }
            });
        } 
        DFS(vertex)
        console.log(visited)
        return res;

    }
    DFSIterative(vertex) {
        let res = [];
        let stack = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        stack.push(vertex);
        while (stack.length > 0) {
        
            let v = stack.pop();
            if (!(v in visited)) res.push(v);
            visited[v] = true;
            

            adjacencyList[v].forEach(element => {if (!(element in visited))
                stack.push(element)})
        }

        return res
    }
    BFSIterative(vertex) {
        let res = [];
        let queue = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        queue.push(vertex);

        while (queue.length) {
            let v = queue.shift();
            if (!(v in visited)) res.push(v);
            visited[v] = true;

            adjacencyList[v].forEach(element => {if (!(element in visited))
                queue.push(element)})
        }
        return res;
    }
}

graph = new AdjacencyList()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

// console.log(graph.DFSRecursion("A"))
console.log(graph.BFSIterative("A"))


console.log(graph)