document.body.style.fontFamily = "'Comic Sans MS', cursive";

function displayDivisionByZeroVideo(): void {
    const iframe: HTMLIFrameElement = document.createElement('iframe');
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = "https://www.youtube-nocookie.com/embed/T2U07KFqmew?si=iGXadDVjc5_REvL8";
    iframe.title = "YouTube video player";
    iframe.frameBorder = "0"; // :) non he ho idea, ma funziona(...)
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;

    const calculatorWrapper: Element | null = document.querySelector('.calculator-wrapper');
    if (calculatorWrapper) {
        calculatorWrapper.innerHTML = ''; // clear the calculator content
        calculatorWrapper.appendChild(iframe);
    } else {
        console.error("Calculator wrapper element not found.");
    }
}

function calculate(): void {
    // here below -> get input values
    const leftInputElement: HTMLInputElement | null = document.getElementById("leftInput") as HTMLInputElement;
    const rightInputElement: HTMLInputElement | null = document.getElementById("rightInput") as HTMLInputElement;
    const operatorElement: HTMLSelectElement | null = document.getElementById("operator") as HTMLSelectElement;

    if (!leftInputElement || !rightInputElement || !operatorElement) {
        console.error("Input elements not found.");
        return;
    }
//parse for inserted values || random number (as subject required)
    const leftOperand: number = parseInt(leftInputElement.value) || Math.floor(Math.random() * 100);
    const rightOperand: number = parseInt(rightInputElement.value) || Math.floor(Math.random() * 100);
    const operator: string = operatorElement.value;

    // check needed: ? if inputs are valid positive integers
    if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
        alert("Please enter valid positive integer values for operands.");
        return;
    }

    // perform calculation based on operator
    let result: number;
    switch(operator) {
        case '+':
            result = leftOperand + rightOperand;
            break;
        case '-':
            result = leftOperand - rightOperand;
            break;
        case '*':
            result = leftOperand * rightOperand;
            break;
        case '/':
            // check for division by zero
            if (rightOperand === 0) {
                displayDivisionByZeroVideo();
                return;
            }
            result = leftOperand / rightOperand;
            break;
        default:
            alert("Invalid operator selected.");
            return;
    }

    // Display result instructions
    const resultElement: HTMLElement | null = document.getElementById("result");
    if (resultElement) {
        resultElement.innerHTML = "Result: " + result;
        console.log("Result: " + result);
    } else {
        console.error("Result element not found.");
    }
}
// set interval for alert popup every 30 seconds - anche se fastidioso
setInterval(function() {
    alert("Please, use me...");
}, 30000);
