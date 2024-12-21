// Event Bubbling and Event Propagation

const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const grandChild = document.querySelector(".grand-child");



parent.addEventListener("click", (e) => {
    console.log("Parent is called");
    e.stopPropagation();
});

child.addEventListener("click", (e) => {
    console.log("Child is called");
    e.stopPropagation();
});

grandChild.addEventListener("click", e => {
    console.log("Grand Child is called");
    e.stopPropagation();
}, false);