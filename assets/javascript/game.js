
var alphabet = ["a", "b", "c"];
var win = 0;
var loose = 0;
var round = 0;

function turn(){
    if (round < 9){
        play();      
    }
    else {
        alert("end of the game");  
    } 
}

function play(){
    document.onkeyup = function(event){
        var userChoice = event.key; 
        var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        if(userChoice == computerChoice){
            win ++;
            round++;
            console.log("you win" + win +" you loose " + loose + " the round is " + round);
        }
        else{
            loose ++;
            round++;
            console.log("you win" + win +" you loose " + loose + " the round is " + round);
        }
    };
};

turn();








    

    



