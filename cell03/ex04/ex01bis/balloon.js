let size = 200;
let color = 0;

const colors = ["red", "green", "blue"];

function updateBalloon() {
    $("#balloon").css({
        "width": size + "px",
        "height": size + "px",
        "background-color": colors[color]
    });
}

$("#balloon").click(function () {

    size += 10;
    color = (color + 1) % 3;

    if (size > 420) {
        size = 200;
        color = 0;
    }

    updateBalloon();
});

$("#balloon").mouseleave(function () {

    size = Math.max(200, size - 5);
    color = (color + 2) % 3;

    updateBalloon();
});