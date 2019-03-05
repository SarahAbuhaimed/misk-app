//current variables
var currentScore, currentPlayer, finalScore, win;

document.querySelector('.btn-new').addEventListener("click", function(){
  currentScore = 0;
  currentPlayer = 0;
  finalScore = [0,0];
   win = 50;
});


document.querySelector('.btn-roll').addEventListener("click", function(){
  //roll dice
  var number = Math.floor(Math.random() * 6 + 1);

  //save dice number
  var dice = document.querySelector('.dice');
  dice.src = "dice-"+ number + ".png";

  if(number != 1){
    // currentScore = 0;

    currentScore +=number;
    document.querySelector("#current-"+ currentPlayer).textContent = currentScore;

  }else{
    currentScore = 0;
    document.querySelector("#current-"+ currentPlayer).textContent = currentScore;
    next();
  }


});

document.querySelector(".btn-hold").addEventListener("click", function(){

        finalScore[currentPlayer] += currentScore;
        document.querySelector("#score-" + currentPlayer).textContent = finalScore[currentPlayer];
        currentScore = 0;
        document.querySelector("#current-"+ currentPlayer).textContent = currentScore;

        next();

});

//change current player
var next = function(){
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;

}
