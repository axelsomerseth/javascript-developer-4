function add(a, b) {
	const result = a + b;
	return result;
}

function concatArray(arr1, arr2) {
	return [...arr1, ...arr2];
}

export { add, concatArray };