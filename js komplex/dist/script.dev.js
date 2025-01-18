"use strict";

var userPoint = 0;
var compPoint = 0;

function play(userChoice) {
  var choices = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * 3); // console.log(randomIndex)

  var computerChoice = choices[randomIndex];
  console.log(computerChoice);

  if (userChoice == "rock") {
    document.getElementById("ko").style.border = "red solid 3px";
    document.getElementById("papir").style.border = "none";
    document.getElementById("ollo").style.border = "none";
  } else if (userChoice == "paper") {
    document.getElementById("papir").style.border = "red solid 3px";
    document.getElementById("ko").style.border = "red solid 0px";
    document.getElementById("ollo").style.border = "none";
  } else {
    document.getElementById("ollo").style.border = "red solid 3px";
    document.getElementById("papir").style.border = "red solid 0px";
    document.getElementById("ko").style.border = "red solid 0px";
  }

  if (computerChoice == "rock") {
    document.getElementById("gepvalasztkep").src = "img/ko.png";
  } else if (computerChoice == "paper") {
    document.getElementById("gepvalasztkep").src = "img/papir.png";
  } else {
    document.getElementById("gepvalasztkep").src = "img/ollo.png";
  }

  var result = getResult(userChoice, computerChoice);
  console.log(result);
  document.getElementById("result").innerText = result;
  document.getElementById("jatekospont").innerHTML = userPoint;
  document.getElementById("geppont").innerHTML = compPoint;

  function getResult(user, computer) {
    if (user === computer) {
      return "Döntetlen";
    } else if (user === "rock" && computer === "scissors" || user === "paper" && computer === "rock" || user === "scissors" && computer === "paper") {
      userPoint++;
      return "A játékos nyert!";
    } else {
      compPoint++;
      return "A gép nyert!";
    }
  }
}