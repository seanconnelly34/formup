function twoSum(arr, key) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] + arr[j] === key) {
				return [i, j];
			}
		}
	}
}

const arr = [2, 3, 6, 9, 14, 0, 8];

console.log(twoSum(arr, 12));
