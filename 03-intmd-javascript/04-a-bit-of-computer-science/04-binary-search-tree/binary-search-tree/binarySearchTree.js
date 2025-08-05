function Node(data) {
  return {
    data,
    left: null,
    right: null
  }
}

function buildTree(array) {
  const sorted = [...new Set(array)].sort((a, b) => a - b);

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

  return {
    getRoot
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