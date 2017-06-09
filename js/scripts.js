// back-end logic goes here
function pingPong(userNumber) {
  if (!userNumber) {
    alert("Please enter a number."); //need to change to "Please enter a number greater than 0."
    return "";
  } else if (userNumber) {
    var countArray = [];
    var counter = 1;
    while (counter <= userNumber) {
      if ((counter % 3 === 0) && (counter % 5 === 0)) {
        countArray.push("ping-pong");
        counter ++;
      } else if (counter % 3 === 0) {
        countArray.push("ping");
        counter ++;
      } else if (counter % 5 === 0) {
        countArray.push("pong");
        counter ++;
      } else {
        countArray.push(counter);
        counter ++;
      };
    };
    return countArray;
  };
};


// user-interface logic goes here
$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#user-input").val());

    $(".results").show();
    $("#results").empty();
    var countArray = pingPong(userNumber);
    for (counter = 0; counter < userNumber; counter ++) {
      $("#results").append("<li>" + countArray[counter] + "</li>");
    };
  });
});
