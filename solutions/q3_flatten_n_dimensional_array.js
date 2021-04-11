/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr, result = []) => {
	// Write your code here
	if(Array.isArray(arr)){
		for (let i = 0; i<arr.length; i++) {
			let value = arr[i];
				if (Array.isArray(value)) {
					flatten(value, result);
				} else {
					result.push(value);
				}
			}
			return result;
		}
	return null;
  };
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
