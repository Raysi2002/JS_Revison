const arr = [['Aashish', "Kanxu", "Preeti"], 8.88, "2002raysi@gmail.com", 2];

console.log(arr);

// Methods of javascipt

//reverse() method
const reversedArr = arr.reverse();
console.log(reversedArr);

//concat() method
const newArr = reversedArr.concat(arr);
console.log(newArr);

//some() method -> It only returns the result in boolean value. If the element saistfy the condition, it return true else false
const evenFun = (element) => element % 2 === 0;

console.log(arr.some(evenFun));

//copyWithIn() method
const withInArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

withInArray.forEach(element => console.log(element));
// withInArray.forEach()

console.log(withInArray.copyWithin( 2));

//toString() method
console.log(arr.toString());

//forEach() function

arr.forEach(element => console.log(element));

//map() function
