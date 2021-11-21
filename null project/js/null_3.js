var numb = 10;
var lives = 3;
function main(bool) {
  document.getElementById("testinput").value = "";
  document.getElementById("button2").classList.add("hidden");
  document.getElementById("resultcontainer").classList.add("hidden");
  document.getElementById("numbers").classList.remove("hidden");
  document.getElementById("timer").classList.remove("hidden");
  var value = sessionStorage.getItem("choiceValue");
  var timer;

  if (lives <= 0) {
    sessionStorage.setItem("final", numb);
    window.location.href = "../html/null_4.html";
  }

  if (value === "0") {
    timer = 5;
    document.getElementById("timer").classList.add("easy");
  } else if (value === "1") {
    document.getElementById("timer").classList.add("medium");
    timer = 4;
  } else if (value === "2") {
    document.getElementById("timer").classList.add("hard");
    timer = 3;
  }
  const getnum = rng(numb);
  const test = document.getElementById("numbers");
  test.innerHTML = getnum.toString();
  setTimeout(answer.bind(null, getnum), timer * 1000);
}

function rng(numb) {
  return Math.floor(Math.random() * numb);
}

function answer(num) {
  document.getElementById("numbers").classList.add("hidden");
  document.getElementById("timer").classList.add("hidden");
  document.getElementById("numberinput").classList.remove("hidden");
  document.getElementById("button1").classList.remove("hidden");
  document.getElementById("container").classList.remove("hidden");
  document.getElementById("button1").onclick = function () {
    check(num);
  };
}

function check(num) {
  console.log(num);
  const input = document.getElementById("testinput").value;
  console.log(input);
  if (input == num) {
    result(true, num, input);
  } else {
    result(false, num, input);
  }
}

function result(bool, num, input) {
  document.getElementById("numberinput").classList.add("hidden");
  document.getElementById("button1").classList.add("hidden");
  document.getElementById("container").classList.add("hidden");
  document.getElementById("button2").classList.remove("hidden");
  document.getElementById("resultcontainer").classList.remove("hidden");
  var resultheader = document.getElementById("result");
  var correct = document.getElementById("correct");
  var usera = document.getElementById("useranswer");
  if (bool == true) {
    resultheader.innerHTML = "Correct.";
    correct.innerHTML = "Number: " + num.toString();
    usera.innerHTML = "Your answer: " + input.toString();
    numb *= 10;
  } else if (bool == false) {
    lives--;
    resultheader.innerHTML = "Incorrect.";
    correct.innerHTML = "Number: " + num.toString();
    usera.innerHTML = "Your answer: " + input.toString();
  }
}
