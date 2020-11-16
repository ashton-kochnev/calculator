let numbers = document.querySelectorAll(".number"),
    operations = document.querySelectorAll(".operator"),
    clearButton = document.querySelectorAll(".clear-btn"),
    decimalButton = document.getElementById("decimal"),
    display = document.getElementById("display"),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = "";


numbers.forEach(item => {
    item.addEventListener("click", (e) => {
        numberPress(e.target.textContent);
    });
});

operations.forEach(item => {
    item.addEventListener("click", (e) => {
        operationPress(e.target.textContent);
    });
});

clearButton.forEach(item => {
    item.addEventListener("click", (e) => {
        clear(e.target.textContent);
    });
});

decimalButton.addEventListener("click", () => {
    if(MemoryNewNumber) {
        display.value = "0.";
        MemoryNewNumber = false;
    } else {
        if(display.value.indexOf(".") === -1) {
            display.value += ".";
        }
    }
});

const numberPress = (number) => {
    if(MemoryNewNumber || display.value === "0") {
        display.value = number;
        MemoryNewNumber = false;
    } else {
        display.value += number;
    }
};

const operationPress = (op) => {
    if(MemoryNewNumber && MemoryPendingOperation != "=") {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === "+") {
            MemoryCurrentNumber += +display.value;  
        } else if (MemoryPendingOperation === "-") {
            MemoryCurrentNumber -= +display.value;  
        } else if (MemoryPendingOperation === "*") {
            MemoryCurrentNumber *= +display.value;  
        } else if (MemoryPendingOperation === "/") {
            MemoryCurrentNumber /= +display.value;  
        } else {
            MemoryCurrentNumber = +display.value;  
        }
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
    }
};

const clear = (id) => {
    if(id === "ce") {
        display.value = "0";
        MemoryNewNumber = true;
    } else if(id === "c") {
        display.value = "0" ;
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = "";
    }
};