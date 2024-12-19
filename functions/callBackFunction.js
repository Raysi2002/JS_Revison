// If a function is passed as a parameter, that is called call back function in js


// callback functions are extremley important

// let's check out the importance of the call back function with this example
// suppose you're sending  money to someone any the money is send successfully message comes first then still money isn't recieved. That's annyoing nah ?? this is will happen if you don't use the call back function
// 

function sendMoney(callback, money){
    console.log("money sent successfully", money);
    callback();
}

function moneySentNotification(){
    console.log("money sent successfully");
}

sendMoney(moneySentNotification, 100);
// -------------Here you have managed it successfully but suppose if you hadn't how this would look life

// ---------> suppose this function inside setTimeout is called first but somehow it is delay due to any issue so we will surely want, moneyNotification wait to execute this function first but it's no going to happen in js

// function senddMoney(paisa){
//     // console.log("money sent successfully", paisa);
//     console.log("Transaction failed due to unsufficent balance!")
// }
// function moneyNotification() {
//     console.log("money recieved!");
// }
// setTimeout(() => senddMoney(200), 1000);
// moneyNotification();

