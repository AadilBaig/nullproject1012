var numb = 10;
var lives = 3;
var num;
var timer;
var final;
var url = "http://localhost:3000/post";

function start1() {
  var value = document.querySelector('input[name="difficulty"]:checked').value;
  sessionStorage.setItem("choiceValue", value);
  window.location.href = `../html/null_3.html`;
}

function main() {
  document.getElementById("testinput").value = "";
  document.getElementById("button2").classList.add("hidden");
  document.getElementById("resultcontainer").classList.add("hidden");
  document.getElementById("numbers").classList.remove("hidden");
  document.getElementById("timer").classList.remove("hidden");

  var value = sessionStorage.getItem("choiceValue");

  if (lives <= 0) {
    window.location.href = `../html/null_4.html`;
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
  setTimeout(answer.bind(null, getnum), timer * 1000);
}

function rng(numb) {
  $.post(
    url +
      "?data=" +
      JSON.stringify({
        action: "rng",
        numb: numb,
      }),
    response
  );
}

function answer() {
  document.getElementById("numbers").classList.add("hidden");
  document.getElementById("timer").classList.add("hidden");
  document.getElementById("numberinput").classList.remove("hidden");
  document.getElementById("button1").classList.remove("hidden");
  document.getElementById("container").classList.remove("hidden");
  document.getElementById("button1").onclick = function () {
    check();
  };
}

function check() {
  console.log(num);
  const input = document.getElementById("testinput").value;
  console.log(input);

  $.post(
    url +
      "?data=" +
      JSON.stringify({
        action: "check",
        lives: lives,
        input: input,
        num: num,
      }),
    response
  );
}

function response(data) {
  var response = JSON.parse(data);
  console.log(data);

  if (response["action"] == "rng") {
    num = response["num"];
    const test = document.getElementById("numbers");
    test.innerHTML = num;
    console.log(num);
  } else if (response["action"] == "check") {
    numb = response["numb"];
    lives = response["lives"];
    document.getElementById("numberinput").classList.add("hidden");
    document.getElementById("button1").classList.add("hidden");
    document.getElementById("container").classList.add("hidden");
    document.getElementById("button2").classList.remove("hidden");
    document.getElementById("resultcontainer").classList.remove("hidden");
    var livescount = document.getElementById("livecounter");
    var resultheader = document.getElementById("result");
    var correct = document.getElementById("correct");
    var usera = document.getElementById("useranswer");
    if (response["result"] == true) {
      resultheader.innerHTML = "Correct.";
      correct.innerHTML = "Number: " + response["num"].toString();
      usera.innerHTML = "Your answer: " + response["input"].toString();
    } else if (response["result"] == false) {
      resultheader.innerHTML = "Incorrect.";
      livescount.innerHTML = "Lives: " + response["lives"].toString();
      correct.innerHTML = "Number: " + response["num"].toString();
      usera.innerHTML = "Your answer: " + response["input"].toString();
    }
  }
}
