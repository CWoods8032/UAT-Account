function executeFunction(){
    document.getElementById('sample').innerHTML = 'Play Again?';
    
} 

function executeGame(){
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;

    let sum = die1 + die2;
    let result;
    
    if(sum == 7 || sum == 11){
        result = "CRAPS - you lose!";
    } else if(die1 == die2 && die1 % 2 == 0) {
        result = "You Won!";
    } else {
        result = "You pushed!";
    }
    
    document.getElementById('game').innerHTML = result;
   
}

function playCraps() {
    executeFunction();
    executeGame();
}