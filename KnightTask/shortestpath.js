const N = 8; // standard chess board size
/**
 * Function that creates queue.
 */
function Queue() {
  this.queue = [];
}

/**
 * Prototype function Of Queue that is adds element to Queue.
 * @param {Array} element
 */
Queue.prototype.enqueue = function (element) {
  this.queue.push(element);
};

/**
 * Prototype function of Queue that removes first element from Queue.
 * @returns {Array} Removed element from the Queue
 */
Queue.prototype.dequeue = function () {
  return this.queue.shift();
};

/**
 * Function to check whether the queue is empty or not
 * @returns {Boolean} True/False
 */
Queue.prototype.isEmpty = function () {
  return this.queue.length == 0;
};

/**
 * Function to check the validity of the Node.
 *
 * @param {Integer} x First co-ordinate of the given Node.
 * @param {Integer} y Second co-ordinate of the given Node.
 * @returns {Boolean} True/False.
 */
function isValid(x, y) {
  let valid = !(x < 0 || y < 0 || x >= N || y >= N);
  return valid;
}

/**
 * Function that checks that the given Node is in Visited Array.
 * @param {Array} element Node(x,y).
 * @param {Array} visited Array of visited Nodes.
 * @returns {Boolean} True/False
 */
function isVisited(element, visited) {
  for (let item in visited) {
    if (element[0] == visited[item][0] && element[1] == visited[item][1])
      return true;
  }
  return false;
}

/**
 * Function that computes shortest path for knight to reach the target from source
 * @param {Array} source Source[x,y,initialDistance]
 * @param {Array} target target[x,y]
 * @returns {Integer} Returns the shortest path that knight can reach
 */
function shortestPath(source, target) {

  // Below lists are all possible movements for knight
  const ROW = [2, 2, -2, -2, 1, 1, -1, -1]; 
  const COL = [-1, 1, 1, -1, 2, -2, 2, -2];

  let visited = []; //Array to store visited Nodes
  //   var distance = 0;
  let queue = new Queue();
  queue.enqueue(source);


  while (!queue.isEmpty()) {
    let node = queue.dequeue();

    let x = node[0];
    let y = node[1];
    let distance = node[2];
    //if source point is not valid returning undefined
    if (!isValid(x, y)) return undefined;
    //if reaches the destination, return the distance
    if (x == target[0] && y == target[1]) return distance;
    if (!isVisited([x, y], visited)) {
      visited.push(node);

      for (let i in ROW) {
        // knights valid position from current node.

        let x1 = x + ROW[i];
        let y1 = y + COL[i];

        if (isValid(x1, y1)) {
          // distance increase on valid point 
          queue.enqueue([x1, y1, distance + 1]);
        }
      }
    }
  }
  return Infinity; // Returns Infinity if Path is not Possible
}

var distance = shortestPath([0, 7, 0], [7, 0]);

console.log(`Minimum distance: ${distance}`);
