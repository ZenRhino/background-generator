var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById ("gradient");
var hor = document.querySelector (".hor");
var ver = document.querySelector (".ver");
var direction = "bottom";


// function setGradient() {
//     body.style.background =
//         "linear-gradient(to right, "
//         + color1.value
//         + ", "
//         + color2.value
//         + ")";

//         css.textContent = body.style.background + ";";

// }

function setGradient () {
    console.log(direction)
    body.style.background =
        "linear-gradient(to "
        + direction
        +", "
        + color1.value
        + ", "
        + color2.value
        + ")";

        css.textContent = body.style.background + ";";
}

function horDirection() {
direction = "right";
// console.log("click " + direction)
setGradient()
}
function verDirection() {
direction = "bottom";
// console.log("click " + direction)
setGradient()
}


color1.addEventListener("input", setGradient); 
color2.addEventListener("input", setGradient);

hor.addEventListener("click", horDirection)
ver.addEventListener("click", verDirection)
    
