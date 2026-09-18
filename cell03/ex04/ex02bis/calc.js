$(document).ready(function () {

    $("#calculate").click(function () {

        const left = $("#left").val();
        const right = $("#right").val();
        const operator = $("#operator").val();

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

});