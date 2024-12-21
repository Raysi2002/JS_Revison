// const container = document.getElementById("container");

// container.addEventListener("click", (e) => {
//     const h1 = document.getElementById("h1");
//     h1.style.textAlign = "center";
//     // console.log(this); <---- this represent the entire window here
// })

// container.addEventListener("click", (e) => {
//     e.preventDefault();
// })

//preventDefault() method

const glink = document.querySelector("#glink");
const cbox = document.querySelector("#cbox");
const submit = document.querySelector("#submit");

glink.addEventListener("click", (e) => {
    if(!cbox.checked){
        e.preventDefault();
    }else{
        console.log("Link clicked");
    }
})
// <------- suppose we are having submit button, and we don't want it to work if the check box isn't marked or some field is empty then we can do this using preventDefault method