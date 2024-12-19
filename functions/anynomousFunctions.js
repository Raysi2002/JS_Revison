// The function without any names are called anynomous function

var func1 = function () {
    console.log("This is anynomous function with function keyword but without any name!")
}

func1();

// const func2 = function() => (console.log(`This is anynomous function with function keyword but with arrow function `)); ------------------------> It's not allowd and will give an error !

let func3 = () => console.log("This is anynomous function without any name with arrow function");
func3();

let func4 = () => {
    console.log(`This is anynomous function without function keyword as well as arrow function including the curly braces`);
}

func4();