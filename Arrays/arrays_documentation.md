# JavaScript Arrays

JavaScript arrays are versatile and widely used data structures that allow you to store multiple values in a single variable. They can hold values of different data types and provide numerous built-in methods for easy manipulation.

## Features of Arrays
- **Dynamic Size**: Arrays can grow or shrink dynamically.
- **Heterogeneous Data**: Arrays can hold values of different types (e.g., numbers, strings, objects).
- **Zero-based Indexing**: The first element of an array is at index `0`.

## Creating Arrays
1. **Using Array Literals**:
   ```javascript
   const arr = [1, 2, 3, 4];

	2.	Using the Array Constructor:

const arr = new Array(5); // Creates an array with 5 undefined elements
const arr2 = new Array(1, 2, 3); // Creates an array with specified elements



Accessing and Modifying Arrays
	•	Accessing Elements:

const arr = [10, 20, 30];
console.log(arr[0]); // 10


	•	Modifying Elements:

arr[1] = 25; // Changes 20 to 25

Common Array Methods

Adding and Removing Elements
	1.	push: Adds elements to the end of an array.

const arr = [1, 2];
arr.push(3, 4);
console.log(arr); // [1, 2, 3, 4]


	2.	pop: Removes the last element from an array.

const last = arr.pop();
console.log(last); // 4


	3.	unshift: Adds elements to the beginning of an array.

arr.unshift(0);
console.log(arr); // [0, 1, 2, 3]


	4.	shift: Removes the first element from an array.

const first = arr.shift();
console.log(first); // 0

Iterating Over Arrays
	1.	forEach: Executes a function for each array element.

arr.forEach((value, index) => console.log(index, value));


	2.	map: Creates a new array by applying a function to each element.

const doubled = arr.map(x => x * 2);
console.log(doubled); // [2, 4, 6]


	3.	filter: Creates a new array with elements that pass a test.

const evens = arr.filter(x => x % 2 === 0);
console.log(evens); // [2]


	4.	reduce: Reduces the array to a single value.

const sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum); // 6


	5.	find: Returns the first element that satisfies a condition.

const greaterThanTwo = arr.find(x => x > 2);
console.log(greaterThanTwo); // 3


	6.	findIndex: Returns the index of the first element that satisfies a condition.

const index = arr.findIndex(x => x > 2);
console.log(index); // 2

Sorting and Reversing
	1.	sort: Sorts elements of an array in place.

const numbers = [3, 1, 4, 2];
numbers.sort((a, b) => a - b); // Ascending
console.log(numbers); // [1, 2, 3, 4]


	2.	reverse: Reverses the order of elements in place.

numbers.reverse();
console.log(numbers); // [4, 3, 2, 1]

Joining and Splitting
	1.	join: Combines all elements into a string.

const joined = arr.join('-');
console.log(joined); // "1-2-3"


	2.	split: Converts a string into an array (used with strings).

const str = "Hello World";
const words = str.split(' ');
console.log(words); // ["Hello", "World"]

Other Useful Methods
	1.	concat: Combines two or more arrays.

const combined = arr.concat([4, 5]);
console.log(combined); // [1, 2, 3, 4, 5]


	2.	slice: Returns a portion of the array.

const part = arr.slice(1, 3);
console.log(part); // [2, 3]


	3.	splice: Adds or removes elements.

arr.splice(1, 1, 8, 9); // Removes 1 element at index 1 and adds 8, 9
console.log(arr); // [1, 8, 9, 3]


	4.	includes: Checks if an array contains a value.

console.log(arr.includes(2)); // false


	5.	indexOf and lastIndexOf: Finds the index of an element.

console.log(arr.indexOf(3)); // 3


	6.	flat: Flattens nested arrays.

const nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // [1, 2, 3, 4]

Iterating Techniques
	•	for Loop:

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


	•	for...of:

for (const value of arr) {
    console.log(value);
}


	•	for...in (less common):

for (const index in arr) {
    console.log(index, arr[index]);
}

Array-Like Objects

Objects like arguments and NodeList are array-like but do not have all array methods. Use Array.from or spread syntax to convert them:

const arrayLike = { 0: 'a', 1: 'b', length: 2 };
const arr = Array.from(arrayLike);
console.log(arr); // ['a', 'b']

Summary

JavaScript arrays are powerful and versatile. Mastering their methods can significantly enhance your ability to write efficient and clean code. Practice these methods to build a strong foundation in array manipulation.

