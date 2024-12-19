//map, reduce, filter

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//map function 
const sqrNum = (element) => Math.pow(element, 2);

console.log(nums.map(sqrNum));

console.log(nums.map((element) => {
    return Math.sqrt(element);
}))

const greaterThan5 = (element) => {
    if(element >= 5) return element;
}



console.log(nums.filter(greaterThan5))