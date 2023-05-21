let display = document.getElementById('display');
// let button = document.getElementsByTagName('button');
let currentNumber = '';
let currentOperator = '';
let result = 0;

// função que atualiza o display
function updateDisplay(value){
    display.textContent = value;
}

// função que recebe os numeros
function appendNumber(number){
    currentNumber += number;
    updateDisplay(currentNumber);
}

// função que recebe o . para tornar o nosso numero decimal
function appendDecimal(){
    if (!currentNumber.includes('.')){
        currentNumber += '.';
        updateDisplay(currentNumber);
    }
}

// função que recebe os operadores
function appendOperator(op){
    currentOperator = op;
    result = parseFloat(currentNumber);
    currentNumber = '';
    updateDisplay(currentOperator);
}

// função que limpa o display
function clearDisplay(){
    currentNumber = '';
    operator = '';
    result = 0;
    updateDisplay('0')
}

// função que deleta o ultimo caractere
function deleteLastCharacter(){
    if (currentNumber > 0){
        currentNumber = currentNumber.slice(0, -1);
        updateDisplay(currentNumber);
    }
}

// função que calcula nosso resultado
function calculate(){
    let operand = parseFloat(currentNumber)
    switch(currentOperator){
        case '+':
            result += operand;
            break;
        case '-':
            result -= operand;
            break;
        case '*':
            result *= operand;
            break;
        case '/':
            result /= operand;
            break;

    }
    currentNumber = '';
    updateDisplay(result);
}