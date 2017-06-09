// back-end logic goes here
function pingPong(userNumber) {
  if (!userNumber) {
    alert("Please enter a number.");
    return "";
  } else if (userNumber) {
    countArray = [];
    for (counter = 1; counter <= userNumber; counter ++) {
      countArray.push(counter);
      // console.log(countArray);
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
    $("#results").append("<li>" + pingPong(userNumber) + "</li>");
  });
});
