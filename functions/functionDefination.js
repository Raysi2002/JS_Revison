// In js, function is defined with the function keyword followed by the function name

//Examples of different methods

function twoSum(arr, target){
    let left = 0;
    let right = arr.length - 1;
    let result = []
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum > target) {
            right--;
        }
        else if(sum < target) {
            left++;
        }
        else{
            result[0] = left;
            result[1] = right;
            break;
        }
    }
    return result;
    
}

const arr1 = [1, 2, 3, 4, 22, 44, 55, 66, 77];
let target = 48;
// console.log(twoSum(arr1, target));

//method 2
// setTimeout(() => (console.log("nothing")), 1000);



