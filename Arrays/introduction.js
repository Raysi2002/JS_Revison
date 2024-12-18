// Arrays are linera data structure which holds the data in contiguous memory location
// Arrays are resizable in the javascipt
// Arrays are zero indexed based in javascript as well
// Arrays can store any type of data in javascipt

//Introduction
//Defining array (Literal method)
const arr = ["Aashish", "2002raysi@gmail.com", '22551A0571', 8.88];
console.log(arr);

//Defining array using Singleton object
const arr2 = new Array();
arr2.push("Kanxu");
arr2.push("I love her");
console.log(arr2);

//Retrieving the elements of the array
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//Method 2 of retrieving data
for(const value of arr2){
    console.log(value);
}