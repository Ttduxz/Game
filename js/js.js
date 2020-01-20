var rand = Math.floor(Math.random()*100);
var In = document.getElementById('number');
var incorrect = document.querySelector('#incorrectanswer');
var incorrectid = document.getElementById('incorrectanswer');
var correct  = document.querySelector('#correctanswer');
var correctid = document.getElementById('correctanswer');
var buttonn = document.getElementById('buttonn');
var a = document.getElementById('a');
var last;
var count = 0;


function getInput(e) {
    e.preventDefault();
    document.getElementById('incorrectanswer').style.display = "block";
    document.getElementById('number').focus();
    
        checkcondition(In.value);
        console.log("rand = " + rand);
}

function checkcondition() {
    
    if (In.value == "" || isNaN(In.value)) {
        a.style.display = "block";
        incorrectid.style.display = "none";
        correctid.style.display = "none";
        document.getElementById('highlow').textContent = "";
        return
    }

    if(In.value != rand){
        a.style.display = "none"
        last = incorrect.textContent;
        incorrect.textContent = last + " " + In.value;
        document.getElementById('correctanswer').style.background = "red";
        correct.textContent = "Wrong";
        count++;
        if(count >= 10){
            buttonn.style.display = "none";
            document.getElementById('end').style.display = "block";
            document.getElementById('end').style.textAlign = "center";
            correctid.style.display = "block";
            correct.textContent = "!!!!GameOver!!!!";
        }
        if(In.value > rand){
            document.getElementById('highlow').textContent = "Last answer was too high!";
        }else{
            document.getElementById('highlow').textContent = "Last answer was too low!";
        }
        console.log("incorrect");
        console.log(In.value)
        console.log(count);
    }else{
        a.style.display = "none"
        incorrectid.style.display = "none"
        correctid.style.display = "block"
        document.getElementById('correctanswer').style.background = "green";
        correct.textContent = "Congratulations! You Win";
        buttonn.style.display = "none";
        document.getElementById('end').style.display = "block";
        document.getElementById('end').style.textAlign = "center";
        document.getElementById('highlow').textContent = "";
    }
}

function repage(){
    location.reload();
}

