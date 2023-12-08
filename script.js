function mincost(arr) {
  // Use a priority queue (min heap) to keep track of the minimum lengths
  const priorityQueue = new MinHeap();

  // Add all the rope lengths to the priority queue
  for (const length of arr) {
    priorityQueue.insert(length);
  }

  let totalCost = 0;

  // Connect ropes until only one rope is left
  while (priorityQueue.size() > 1) {
    // Extract the two minimum lengths from the priority queue
    const rope1 = priorityQueue.extractMin();
    const rope2 = priorityQueue.extractMin();

    // Calculate the cost of connecting these two ropes
    const cost = rope1 + rope2;

    // Add the cost to the total cost
    totalCost += cost;

    // Insert the connected rope back into the priority queue
    priorityQueue.insert(cost);
  }

  return totalCost;
}

// MinHeap class to implement the priority queue
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  extractMin() {
    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown();
    }

    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent <= element) break;

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      const leftChildIdx = 2 * index + 1;
      const rightChildIdx = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild < this.heap[index]) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swap === null && rightChild < this.heap[index]) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = this.heap[index];
      index = swap;
    }
  }
}

module.exports=mincost;
