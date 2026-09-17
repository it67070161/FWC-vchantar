const balloon = document.getElementById("balloon");

let size = 200;
let color = 0;

const colors = ["red", "green", "blue"];

function updateBalloon() {
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[color];
}

balloon.addEventListener("click", function() {

    size += 10;
    color = (color + 1) % 3;

    if (size > 420) {
        size = 200;
        color = 0;
    }

    updateBalloon();
});

balloon.addEventListener("mouseleave", function() {

    size = Math.max(200, size - 5);
    color = (color + 2) % 3;

    updateBalloon();
});