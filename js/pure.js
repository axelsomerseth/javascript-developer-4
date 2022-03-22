// Pure function
// 1. No dependency
// 2. No mutation
function add(a, b) {
  return a + b;
}

function concatArray(arr1, arr2) {
  return [...arr1, ...arr2];
}

export { add, concatArray };
