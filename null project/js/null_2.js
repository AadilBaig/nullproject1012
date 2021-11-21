var value;
function start1() {
  value = document.querySelector('input[name="difficulty"]:checked').value;
  sessionStorage.setItem("choiceValue", value)
  window.location.href = `../html/null_3.html`;
}
