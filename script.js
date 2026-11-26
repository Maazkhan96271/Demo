const display = document.getElementById("display");

// Add a number or operator to the display.
function appendValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
}

// Clear the display.
function clearDisplay() {
    display.value = "";
}

// Delete the last character.
function deleteLast() {
    if (display.value === "Error") {
        display.value = "";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

// Calculate the result.
function calculate() {
    const expression = display.value;

    // Allow only calculator characters.
    if (!expression || !/^[0-9+\-*/%.()\s]+$/.test(expression)) {
        display.value = "Error";
        return;
    }

    try {
        const result = Function('"use strict"; return (' + expression + ')')();

        if (!Number.isFinite(result)) {
            display.value = "Error";
            return;
        }

        display.value = Number(result.toFixed(10)).toString();
    } catch (error) {
        display.value = "Error";
    }
}
