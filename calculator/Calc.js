const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
const buttonsBlock = document.querySelector('.buttons-block');
const buttonCreate = document.querySelector('.buttonCastom');
let currentOperand = null;
let previosOperand = null;
let currentOperation = null;
let result;

const performAction = () => {
    result = window.eval(previosOperand + currentOperation + currentOperand);
    currentOperand = result;
    display.innerHTML = currentOperand;
    previosOperand = null;
    currentOperation = null;
}

const performInputOperation = (keyValue) => {
    switch (keyValue) {
        case '+':
        case '-':
        case '*':
        case '/':
            previosOperand = currentOperand;
            currentOperand = null;
            currentOperation = keyValue;
            display.innerHTML = '';
            break;
        case '=':
        case 'Enter':
            performAction();
            break;
        case 'c':
            currentOperand = null;
            previosOperand = null;
            currentOperation = null;
            result = null;
            display.innerHTML = '';
            break;
        default:
            if (Number.isInteger(+keyValue)) {
                currentOperand =
                    currentOperand === null ? keyValue : currentOperand + keyValue;
                display.textContent = currentOperand;
            }
    }
}

const handButtonIntraction = event => {
    let buttonValue = event.target.textContent;
    performInputOperation(buttonValue)
};

document.addEventListener('keydown', event => {
    let keyValue = event.key;
    if (keyValue === "Backspace") {
        display.innerHTML = display.innerHTML.toString().slice(0, -1);
        currentOperand = display.innerHTML;
    }
    performInputOperation(keyValue);
});


const customOperacion = () => {
    result = Math.sqrt(+currentOperand)
    currentOperand = result;
    display.innerHTML = currentOperand;
    previosOperand = null;
    currentOperation = null;
}

buttonsBlock.addEventListener("click", handButtonIntraction);


const addCustomOperations = () => {
    const newButton = document.createElement('div');
    newButton.classList = 'buttonCastom';
    newButton.textContent = 'sqrt';
    buttonsBlock.append(newButton);
    newButton.addEventListener('click', customOperacion);
}

buttonCreate.addEventListener('click', addCustomOperations);


document.addEventListener('copy', function(event) {
	event.preventDefault();
    alert('Вы не можете копировать');
});
document.oncontextmenu = function(event) {
    event.preventDefault();
    alert("Контекстное меню документа");
  };