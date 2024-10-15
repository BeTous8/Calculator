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


let val = '';
let numval = 0;
let firstNum ='';
let secondNum;
let operator;
let result;
let firstNumStr;
let secondNumStr;
let count = 0;


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
const clearBtn = document.querySelector('#btnC')

btnContainer.addEventListener('click', (e) => {
    const clickedButton = e.target

    // if clicked button is a number
    if (!isNaN(clickedButton.textContent)) {
        val += clickedButton.textContent;
        displayBox.textContent = val;
    }
    
    // if click button is an operator
    if (clickedButton.textContent === "+" || clickedButton.textContent === "-" || clickedButton.textContent === "*" || clickedButton.textContent === "/") {
        if (firstNum === '') {
            firstNum = val;
            val = '';
            operator = clickedButton.textContent;
            console.log(`operator: ${operator}`)
        }
        // when we are at inserting next number
        else if (firstNum !== '' && val !== '') {
            secondNum = val;
            result = operate(operator, parseFloat(firstNum), parseFloat(secondNum))
            console.log(result)
            displayBox.textContent = result

            firstNum = result
            val = '';
            operator = clickedButton.textContent;
            
        }
    }
})
equalSign.addEventListener('click', () => {
    secondNum = val
    
    if (firstNum !== "") {
        result = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
        displayBox.textContent = result
    }

}) 

clearBtn.addEventListener('click', () => {
    val = '';
    firstNum = '';
    secondNum = '';
    operator = '';
    result = '';
    displayBox.textContent = 0
})
        // when equal button is clicked




        // val += clickedButton.textContent;
        // numval = parseInt(val)
        // console.log(numval)
    
//     else if (count === 1) {
//         firstNum = numval;
//         console.log(`firstNum: ${firstNum}`)
//         val = ''
//         operator = clickedButton.textContent;
        
//     }
//     else {
//         secondNum = numval;
//         console.log(`secondtNum: ${secondNum}`)

//         firstNum = operate(operator, +firstNum, +secondNum)
//         console.log(`firstNum: ${firstNum}`)
//     }
    

    
    
    


equalSign.addEventListener('click', () => {
    // result = operate(operator, +firstNumStr, +secondNumStr);
    // console.log(result)

    // // displayBox.innerHTML = '';


    // const displayResult = document.createElement("div");
    // displayResult.classList.add("display-result");
    // displayResult.textContent = `=${result}`;

    // displayBox.append(document.createElement('br'));


    // displayBox.append(displayResult);



})
    
