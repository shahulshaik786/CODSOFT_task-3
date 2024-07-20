document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");

    let expression = "";

    // Function to update display
    function updateDisplay() {
        display.textContent = expression || "0";
    }

    // Function to evaluate the expression
    function evaluateExpression() {
        try {
            expression = eval(expression).toString();
        } catch (error) {
            expression = "Error";
        }
        updateDisplay();
    }

    // Event listeners for buttons
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.getAttribute("data-value");

            if (value === "C") {
                expression = "";
            } else if (value === "=") {
                evaluateExpression();
            } else if (value === "DEL") {
                expression = expression.slice(0, -1);
            } else {
                expression += value;
            }

            updateDisplay();
        });
    });

    // Function to handle keyboard input
    function handleKeyboardInput(event) {
        const key = event.key;

        if (key === "Backspace") {
            expression = expression.slice(0, -1);
        } else if (key === "Enter") {
            evaluateExpression();
        } else if (/^[0-9+\-*/.]$/.test(key)) {
            expression += key;
        }

        updateDisplay();
    }

    // Add event listener for keyboard input
    document.addEventListener("keydown", handleKeyboardInput);
});
