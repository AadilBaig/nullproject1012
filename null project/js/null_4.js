function main() {
  var final = sessionStorage.getItem("final");
  document.getElementById("finalscore").innerHTML =
    "Final score: " + final.toString().length - 1;
}
