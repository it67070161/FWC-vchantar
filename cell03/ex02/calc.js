const button = document.getElementById("calculate");

button.addEventListener("click", function () {
    const left = document.getElementById("left").value;
    const right = document.getElementById("right").value;
    const operator = document.getElementById("operator").value;

    const num1 = Number(left);
    const num2 = Number(right);

    if (
        left === "" ||
        right === "" ||
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        num1 < 0 ||
        num2 < 0
    ) {
        alert("Error :(");
        return;
    }

    if ((operator === "/" || operator === "%") && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            break;

        case "%":
            result = num1 % num2;
            break;
    }

    alert(result);
    console.log(result);
});

setInterval(function () {
    alert("Please, use me...");
}, 30000);