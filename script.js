function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


console.log(divide(2,3))

let firstNum;
let secondNum;
let operator;
let result;
let firstNumStr;
let secondNumStr;


function operate(operator, firstNum, secondNum) {
    switch (operator) {
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum)
    }

}

const btnContainer = document.querySelector('.buttons');
const display = document.querySelector('.display');
const displayBox = document.querySelector('.display-box')
const equalSign = document.querySelector('#btnE')

btnContainer.addEventListener('click', (e) => {
    const clickedButton = e.target
    // console.log(clickedButton)
    // console.log(clickedButton.textContent)

    // if (clickedButton.id === "+") {
    //     firstNum = displayBox.textContent;
    //     operator = clickedButton.id;
    //     console.log(`first number: ${firstNum}`);
    //     console.log(`operator: ${operator}`)
    // }

    if (!(clickedButton.textContent === "=")) {
        displayBox.textContent += clickedButton.textContent
        console.log(typeof(displayBox.textContent))

        const displayString = displayBox.textContent;
        console.log(displayString)

        const displayArr = displayString.split('')
        console.log(displayArr)

        const operatorIndex = displayArr.findIndex(item => item === "+");
        console.log(operatorIndex)

        firstNum = displayArr.slice(0, operatorIndex)
        console.log(firstNum)
        secondNum = displayArr.slice(operatorIndex+1)
        console.log(secondNum)

        operator = displayArr[operatorIndex]
        console.log(operator)

        // put back the numbers array to string
        firstNumStr = firstNum.join("")
        secondNumStr = secondNum.join("")
        console.log(firstNumStr)
        console.log(secondNumStr)
        
        

        // add event listener when '=' is clicked
    }
    
})

equalSign.addEventListener('click', () => {
    result = operate(operator, +firstNumStr, +secondNumStr);
    console.log(result)

    // displayBox.innerHTML = '';


    const displayResult = document.createElement("div");
    displayResult.classList.add("display-result");
    displayResult.textContent = `=${result}`;

    displayBox.append(document.createElement('br'));


    displayBox.append(displayResult);
}) 



    
