//var <- have functional scope but dont dave block scope
var x = 50;

const mul = (x, y) => {
    var z = 20;
    return x * y * z;
}

console.log(mul(2, 3));
// console.log(z); //Will throw an error as this is for has functional scope

