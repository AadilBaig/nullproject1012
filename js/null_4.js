var url = "http://localhost:3000/post";
var numb;

function main() {
  $.post(
    url +
      "?data=" +
      JSON.stringify({
        action: "final",
        score: numb,
      }),
    response
  );
}

function response(data) {
  var response = JSON.parse(data);
  console.log(data);

  if (response["action"] == "final") {
    $("#finalscore").text(
      "Final score: " + (response["score"].toString().length - 1)
    );
  }
}
