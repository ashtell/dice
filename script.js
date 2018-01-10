function getRandomNumber(diceSize){
    return Math.floor(Math.random() * diceSize + 1);
}
function displayNumber(id, diceSize){
    var theDisplay = document.getElementById(id);
    theDisplay.innerHTML = getRandomNumber(diceSize);
}
function getPercent(id){
    var theDisplay = document.getElementById(id);
    var number = getRandomNumber(100);
    theDisplay.innerHTML = number + "%";
}