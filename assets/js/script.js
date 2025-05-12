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
function runGame(){

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