
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var loose = 0;
var round = 0;


var welcome = document.getElementById("welcome");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computer-text");
var winText = document.getElementById("winText");
var looseText = document.getElementById("looseText");
var roundText = document.getElementById("roundText");


    document.onkeyup = function(event){
        var userChoice = event.key; 
        var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        if (round < 9){ 
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
        }
        else{
            if (win > loose ){
                alert("End of the game you have win " + win + " times");
                round = 0;
                win = 0;
                loose = 0;
            }
            else{
                alert("End of the game you have lost " + loose + " times");
                round = 0;
                win = 0;
                loose = 0;
            }
        }
 
        userChoiceText.textContent = "You choose: " + userChoice;
        computerChoiceText.textContent = "Computer: " + computerChoice;
        winText.textContent = "Wins: " + win;
        looseText.textContent = "loose: " + loose;
        roundText.textContent = "round: " + round;

    };











    

    



