
function getRandomNumber(diceSize) {
    return Math.floor(Math.random() * diceSize + 1);
}
function displayNumber(id, diceSize) {
    var amountOfTimes = document.getElementById("number").value;
    var theDisplay = document.getElementById(id);
    var arrayofDice = [];
    for(var i = 0; i < amountOfTimes; i++){
        
        arrayofDice[i] = getRandomNumber(diceSize);
    }

    theDisplay.innerHTML = arrayofDice.join(", ");
}
function getPercent(id) {
    var theDisplay = document.getElementById(id),
        number = getRandomNumber(100);
    theDisplay.innerHTML = number + "%";
}