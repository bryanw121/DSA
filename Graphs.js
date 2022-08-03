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
}

graph = new AdjacencyList()
graph.addVertex("tokyo");
graph.addVertex("spain");
graph.addVertex("italy");
graph.addEdge("tokyo", "spain");
graph.addEdge("spain", "italy");
graph.removeEdge("spain", "italy");
console.log(graph)