function Node(data) {
  return {
    data,
    left: null,
    right: null
  }
}

function buildTree(array) {
  // The spread operator spreads all values of the Set into a new array.
  // If no spread operator: new Set(array); → Set(3) {1, 2, 3}
  const sorted = [...new Set(array)].sort((a, b) => a - b);
  console.log(sorted);

  function build(start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root = new Node(sorted[mid]);

    root.left = build(start, mid - 1);
    root.right = build(mid + 1, end);

    return root;
  }

  return build(0, sorted.length - 1);
}

export function Tree(array) {
  let root = buildTree(array);

  function getRoot() {
    return root;
  }

  function insert(value, node = root) {
    if (node === null) return Node(value);

    if (value < node.data) node.left = insert(value, node.left);
    else if (value > node.data) node.right = insert(value, node.right);

    return node;
  }

  function deleteItem(value, node = root) {
    if (node === null) return null;

    if (value < node.data) node.left = deleteItem(value, node.left);
    else if (value > node.data) node.right = deleteItem(value, node.right);
    else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      const minLargerNode = findMin(node.right);
      node.data = minLargerNode.data;
      node.right = deleteItem(minLargerNode.data, node.right); 
    }

    return node;
  }

  function find(value, node = root) {
    if (node === null) return null;
    if (value === node.data) return node;

    return value < node.data ? find(value, node.left) : find(value, node.right);
  }

  function levelOrderForEach(callback) {
    requireCallback(callback);

    const queue = [root]; // closure

    while (queue.length) {
      const node = queue.shift();
      callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  function inOrderForEach(callback, node = root) {
    requireCallback(callback);

    if (!node) return;

    inOrderForEach(callback, node.left);
    callback(node);
    inOrderForEach(callback, node.right);
  }

  function preOrderForEach(callback, node = root) {
    requireCallback(callback);

    if (!node) return;

    callback(node);
    preOrderForEach(callback, node.left);
    preOrderForEach(callback, node.right);
  }

  function postOrderForEach(callback, node = root) {
    requireCallback(callback);

    if (!node) return;

    postOrderForEach(callback, node.left);
    postOrderForEach(callback, node.right);
    callback(node);
  }

  function height(value) {
    const node = find(value);
    if (!node) return null;
    return getHeight(node);
  }

  function getHeight(node) {
    if (!node) return -1;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
  }

  function depth(value, node = root, currentDepth = 0) {
    if (!node) return null;
    if (value === node.data) return currentDepth;
    return value < node.data
      ? depth(value, node.left, currentDepth + 1)
      : depth(value, node.right, currentDepth + 1);
  }

  function isBalanced(node = root) {
    if (!node) return true;
    const lh = getHeight(node.left);
    const rh = getHeight(node.right);
    return (
      Math.abs(lh - rh) <= 1 &&
      isBalanced(node.left) &&
      isBalanced(node.right)
    );
  }

  function rebalance() {
    const values = [];
    inOrderForEach(node => values.push(node.data));
    root = buildTree(values);
  }

  function findMin(node = root) {
    while (node.left) node = node.left;
    return node;

  function requireCallback(callback) {
    if (typeof callback !== 'function') throw new Error("Callback required");
  }

  }

  return {
    getRoot,
    insert: val => (root = insert(val)),
    deleteItem: val => (root = deleteItem(val)),
    find,
    height,
    depth,
    levelOrderForEach,
    inOrderForEach,
    preOrderForEach,
    postOrderForEach,
    isBalanced,
    rebalance,
    findMin,
  }
}

export function prettyPrint(node, prefix = '', isLeft = true) { 
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};