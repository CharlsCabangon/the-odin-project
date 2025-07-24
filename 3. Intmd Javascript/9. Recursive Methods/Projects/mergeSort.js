function mergeSort(array) {
  // Base case: arrays with 0 or 1 item are already sorted
  if (array.length <= 1) return array;

  // Split the array in half
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursion happens here: The function calls itself on the left and right halves. This means it keeps splitting each half into smaller halves until it reaches arrays of size 1.
  // After both halves are sorted, it uses the merge function to combine them into a single sorted array.
  return merge(mergeSort(left), mergeSort(right));
}

// Helper function to merge two sorted arrays
function merge(left, right) {
  let result = [];
  let l = 0; 
  let r = 0;

  // Compare elements from both arrays and add the smallest one
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }

  // Concat remaining elements (only one of these will actually run)
  return result.concat(left.slice(l)).concat(right.slice(r));
}
console.log("Solved using recursion");
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));   
console.log(mergeSort([105, 79, 100, 110]));        
