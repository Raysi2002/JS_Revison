// DOM events

const circle = document.querySelector(".circle");
document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;


    circle.createElement("")
    circle.style.left = `${e.clientX - 10}px`; // Center horizontally
    circle.style.top = `${e.clientY - 10}px`; 


})