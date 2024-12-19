// The function which is treated like a variable is called first class function
//Example

//Method - 1
let fun = function(element){
    return Math.pow(element, 10);
};

const arr = [2, 3, 4, 2, 6, 3];

for(let value of arr){
    console.log(fun(value));
}

//Method -2
let func = (element) => (Math.sqrt(element));
for(let num of arr){
console.log(func(num))
}

