// Wait for the DOM to load before running the script
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    // Now that we have all the elements as an array, we can loop through them
    for (let button of buttons) {
        button.addEventListener("click", function() {
            // If the button clicked has the data-type attribute of submit then we will send an alert.
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked the submit button!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked the ${gameType}`);

            }
        });
}
});
/**
 * The main game "loop", called when the script is first laoded
 * and after the user's answer has been processed
 * This function will create two random numbers between 1 and 25
 * and assign them to num1 and num2
 */
function runGame(){
    
   
let num1  = Math.floor(Math.random() *25) +1;
let num2  = Math.floor(Math.random() *25) +1;
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}   