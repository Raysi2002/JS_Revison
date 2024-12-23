// DOM events

// const circle = document.querySelector(".circle");
// document.addEventListener("mousemove", (e) => {
//     const x = e.clientX;
//     const y = e.clientY;


//     circle.style.left = `${e.clientX - 10}px`; // Center horizontally
//     circle.style.top = `${e.clientY - 10}px`; 


// })

// const newCircle = document.createElement("circleEverywhere");
// newCircle.addEventListener("mousemove", (e) => {
//     newCircle.innerHTML = `<div class="circleEverywhere">I am new Circle</div>
//     <style> .circleEverywhere{
//     position: absolute;
//     height: 10px;
//     width: 10px;
//     background-color: #f18238;
//     border-radius: 50%;
// } </style>
//     `;
//     newCircle.style.top = `${e.clientY - 10}px`;
//     newCircle.style.left = `${e.clientX - 10}px`;
// });


//More Properties
const more = document.querySelector(".more");
more.addEventListener("click", (e) => {
    console.log("Time Stamp: " , e.timeStamp);
    console.log(`Which : ${e.which}`);
    console.log(`Bubble: ${e.bubbles}`);
    console.log(`Cancelabe: ${e.cancelable}`);
    console.log(`Key: ${e.key}`);
    console.log(`PageX: ${e.pageX} PageY: ${e.pageY}`);
    console.log(`Current Target: ${e.currentTarget}`);
    console.log(`Type: ${e.type}`);
    console.log(`Target: ${e.target}`)
})