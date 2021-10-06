var playing=false;
var score;
var action;
var timeremaining;
var correctanswer;
document.getElementById("startreset").onclick = function(){
    if(playing == true){
        location.reload();
    }else{
        playing=true;
        score=0;
        document.getElementById("scoreval").innerHTML = score;
        document.getElementById("time").style.display = "block";
        document.getElementById("startreset").innerHTML = "Reset Game";
        timeremaining=60;
        document.getElementById("gameover").style.display="none";
        document.getElementById("timevalue").innerHTML = timeremaining;

        startCountdown();

        generateQA();
    }
}


for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick = function() {
        if(playing == true){
            if(this.innerHTML == correctanswer){
                score++;
                document.getElementById("scoreval").innerHTML = score;
                document.getElementById("wrong").style.display="none";
                document.getElementById("correct").style.display="block";
                setTimeout(function(){
                    document.getElementById("correct").style.display="none";
                },1000);
                generateQA();
            }else{
                document.getElementById("correct").style.display="none";
                document.getElementById("wrong").style.display="block";
                setTimeout(function(){
                    document.getElementById("wrong").style.display="none";
                },1000);
            }
        } 
     }
}





function startCountdown(){
   action = setInterval(function(){
     timeremaining -= 1;
     document.getElementById("timevalue").innerHTML = timeremaining;
     if(timeremaining==0){
         clearInterval(action);
         stopcountDown();
     }
   },1000);

}
function stopcountDown(){
    document.getElementById("gameover").style.display="block";
    document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your Score is "+score+"</p>";
    document.getElementById("time").style.display="none";
    document.getElementById("startreset").innerHTML = "Start Game";
    playing=false;
}
function generateQA(){
   var x = 1*Math.round(19*Math.random());
   var y = 1*Math.round(19*Math.random());
   correctanswer = x*y;
   document.getElementById("question").innerHTML=x+"x"+y;
   var correctpos = 1+Math.round(3*Math.random());
   document.getElementById("box"+correctpos).innerHTML=correctanswer;
    var answers = [correctanswer];
   for(i=1;i<5;i++){
        if(i!= correctpos){
            do{
            var wronganswer = 1*Math.round(19*Math.random()) * 1*Math.round(19*Math.random());
            }while(answers.indexOf(wronganswer)>-1);
            document.getElementById("box"+i).innerHTML=wronganswer;  
            answers.push(wronganswer);
        }
    }

}
