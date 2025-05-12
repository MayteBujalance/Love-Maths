// Wait for the DOM to load before running the script
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    // Now that we have all the elements as an array, we can loop through them
    for (let button of buttons) {
        button.addEventListener("click", function() {
            // If the button clicked has the data-type attribute of submit then we will send an alert.
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);

            }
        });
}

runGame("addition");
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 * This function will create two random numbers between 1 and 25
 * and assign them to num1 and num2
 */
function runGame(gameType){
let num1  = Math.floor(Math.random() *25) +1;
let num2  = Math.floor(Math.random() *25) +1;

if (gameType === "addition"){
    displayAdditionQuestion(num1, num2);
   } else if (gameType ==="multiply"){
    displayMultiplyQuestion(num1, num2);
   } else if (gameType === "substruct"){
    displaySubtractQuestion(num1, num2);
   } else if (gameType === "division"){
    displayDivisionQuestion(num1, num2);
    } else {
    alert(`Unknown game type: ${gameType}`);
    throw`Unknown game type: ${gameType}. Aborting!`;
   }
}
/**
 * Checks the answer given by iser against the first element in the returned calculateCorrectAnswer array
 */
function checkAnswer(){
    // takes the answers value from the id box and store it in a variable userAnswer
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect){
        alert("Hey! You got it right!");    
        incrementScore();  
    } else {
        alert(`awww.... you answered ${userAnswer}.The correct answer was ${calculatedAnswer[0]}. You are getting there, keep trying!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}
/**
 * Gets the operands(the numbers) and the operator(plus, minus etc)
 * from the DOM and returns the correct answer,
 */
function calculateCorrectAnswer(){
    // this gets the values back from the DOM. ParseInt change string to a number
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+"){
        return [operand1 + operand2, "addition"];
    } else if (operator === "x"){
        return [operand1 * operand2, "multiply"];
    } else if (oeprator === "-"){
        return [operand1 - operand2, "substruct"];

    }else {
        alert(`Unimplemented operator: ${operator}`);
        throw`Unimplemented operator: ${operator}. Aborting!`;
         }
    }
/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore(){
    // fetches the current score from the DOM
    let oldScore = parseInt(document.getElementById("score").innerText);
    // increments the fetched value by 1 and then update the value in the DOM
    document.getElementById("score").innerText = ++oldScore;

}
/**
 * Gets the current incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer(){
     // fetches the current score from the DOM
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    // increments the fetched value by 1 and then update the value in the DOM
    document.getElementById("incorrect").innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion(operand1, operand2){
    // Ternary operator is used to ensure that the first operand is always greater than the second. is operand1 greater than openas2? if yes, write operasn1 if not (else) apply operand2.
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}

function displayDivisionQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
}