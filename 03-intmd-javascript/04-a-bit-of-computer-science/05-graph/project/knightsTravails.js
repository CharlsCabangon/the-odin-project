/**
 * knightMoves(start, target)
 * - start, target: [x, y] with 0 <= x,y <= 7
 * - returns an array of positions from start to target (inclusive), e.g. [[0,0],[1,2],[3,3]]
 */

const KNIGHT_OFFSETS = [
  [2, 1], [1, 2], [-1, 2], [-2, 1],
  [-2, -1], [-1, -2], [1, -2], [2, -1]
];

function posToKey([x, y]) {
  return `${x},${y}`;
}

function keyToPos(key) {
  return key.split(',').map(Number);
}

function isValidPos([x, y]) {
  return Number.isInteger(x) && Number.isInteger(y) && x >= 0 && x < 8 && y >= 0 && y < 8;
}

export function knightMoves(start, target) {
  // Input validation
  if (!Array.isArray(start) || !Array.isArray(target) || start.length !== 2 || target.length !== 2) {
    throw new TypeError('start and target must be arrays like [x, y]');
  }
  if (!isValidPos(start) || !isValidPos(target)) {
    throw new RangeError('Coordinates must be integers between 0 and 7 inclusive.');
  }

  const startKey = posToKey(start);
  const targetKey = posToKey(target);

  // Quick shortcut: same square
  if (startKey === targetKey) {
    console.log(`You made it in 0 moves! Here's your path:\n[${start.join(',')}]`);
    return [start.slice()];
  }

  // BFS setup
  const queue = [];                // simple FIFO queue for BFS (holds keys)
  const parent = new Map();        // maps key -> parentKey (for path reconstruction)
  const visited = new Set();       // to avoid revisiting

  queue.push(startKey);
  parent.set(startKey, null);
  visited.add(startKey);

  // BFS loop
  while (queue.length > 0) {
    const currentKey = queue.shift();
    const currentPos = keyToPos(currentKey);
    const [cx, cy] = currentPos;

    // Generate all valid knight moves
    for (const [dx, dy] of KNIGHT_OFFSETS) {
      const next = [cx + dx, cy + dy];

      if (!isValidPos(next)) continue;  // skip off-board

      const nextKey = posToKey(next);
      if (visited.has(nextKey)) continue; // skip already seen

      // Mark parent & visited, enqueue for later
      parent.set(nextKey, currentKey);
      visited.add(nextKey);
      queue.push(nextKey);

      // If target found — reconstruct and return path
      if (nextKey === targetKey) {
        const path = [];
        let k = nextKey;
        while (k !== null) {
          path.push(keyToPos(k));
          k = parent.get(k);
        }
        path.reverse();
        console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
        path.forEach(p => console.log(`[${p.join(',')}]`));
        return path;
      }
    }
  }

  // Should never happen on an 8x8 board for a knight, but good practice:
  console.log('No path found (unexpected).');
  return null;
}

