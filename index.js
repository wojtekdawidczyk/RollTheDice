function playSound(){
  var audio = document.getElementById("audio");
  audio.play();
}

function changeButton(){
  document.querySelector(".btn").textContent = "ROLL AGAIN";
}

function showCup(score){
  if(score == 1){
    document.querySelector(".score-left").classList.add("unhide");
  }else if (score == 2) {
    document.querySelector(".score-right").classList.add("unhide");
  }
}

function hideCup(){
  document.querySelector(".score-left").classList.remove("unhide");
  document.querySelector(".score-right").classList.remove("unhide");
}

function myFunction() {

  playSound();
  changeButton();
  hideCup();

  var rollFirstDice = Math.round(Math.random() * 5 + 1);
  var rollSecondDice = Math.round(Math.random() * 5 + 1);
  var source1 = "images/dice" + rollFirstDice + ".png";
  var source2 = "images/dice" + rollSecondDice + ".png";
  var resultMessage;
  var score;

  document.querySelector(".dice-img-left").setAttribute("src", source1);
  document.querySelector(".dice-img-right").setAttribute("src", source2);

  if(rollFirstDice > rollSecondDice){
    resultMessage = "Player 1 won!";
    score = 1;
  }else if(rollFirstDice < rollSecondDice) {
    resultMessage = "Player 2 won!";
    score = 2;
  }else if(rollFirstDice == rollSecondDice){
    resultMessage = "Draw!";
  }

  document.querySelector("h1").textContent = resultMessage;

  showCup(score);

}
