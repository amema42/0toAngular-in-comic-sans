document.body.style.fontFamily = "'Comic Sans MS', cursive";

function displayDivisionByZeroVideo() {
    var iframe = document.createElement('iframe');
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = "https://www.youtube-nocookie.com/embed/T2U07KFqmew?si=iGXadDVjc5_REvL8";
    iframe.title = "YouTube video player";
    iframe.frameborder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerpolicy = "strict-origin-when-cross-origin";
    iframe.allowfullscreen = true;

    var calculatorWrapper = document.querySelector('.calculator-wrapper');
    calculatorWrapper.innerHTML = ''; // clear the calculator content
    calculatorWrapper.appendChild(iframe);
}

function calculate() {
    // Get input values
    var leftOperand = parseInt(document.getElementById("leftInput").value);
    var operator = document.getElementById("operator").value;
    var rightOperand = parseInt(document.getElementById("rightInput").value);

    // Check if inputs are valid positive integers
    if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
        alert("Please enter valid positive integer values for operands.");
        return;
    }

    // Perform calculation based on operator
    var result;
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

    // Display result
    document.getElementById("result").innerHTML = "Result: " + result;
    console.log("Result: " + result);
}

function displayDivisionByZeroAlert() {
    // Display alert message or render iFrame
    alert("Division by zero is not allowed. Check out this video: https://youtu.be/T2U07KFqmew");
}

// Set interval for alert popup every 30 seconds
setInterval(function() {
    alert("Please, use me...");
}, 30000);
