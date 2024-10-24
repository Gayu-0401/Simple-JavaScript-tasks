let TotalScore = document.getElementById("score");
TotalScore = 10;
let randomnumber = Math.floor(Math.random()*10)+1;
let attempts = 0;
console.log("Random number : "+ randomnumber);

function check(){
    let num = Number(document.getElementById("input").value);
    console.log("input : "+num);
    
    attempts++;
        if(num === randomnumber){
            alert("You Guessed Correctly")
            document.getElementById("result").innerHTML  = "You Guessed correctly";
        }
        else if(num < randomnumber){
            document.getElementById("result").innerHTML  = "Too low! Try again";  
            TotalScore -= 1;
            score.textContent = "The Score you have : "+TotalScore;
        }
        else {
            document.getElementById("result").innerHTML  = "Too high! Try again";  
            TotalScore -= 1;
            score.textContent = "The Score you have : "+TotalScore;
        }
        document.getElementById("Attempts").innerHTML = "Attempts : "+attempts;

    if(TotalScore <= 0){
        alert("You Lost The Chance");
    }

}

