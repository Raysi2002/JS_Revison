ey(paisa){
    // console.log("money sent successfully", paisa);
    console.log("Transaction failed due to unsufficent balance!")
}
function moneyNotification() {
    console.log("money recieved!");
}
setTimeout(() => senddMoney(200), 1000);
moneyNotification();