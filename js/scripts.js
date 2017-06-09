// back-end logic goes here
function pingPong(userNumber) {
  if (!userNumber) {
    alert("Please enter a number."); //need to change to "Please enter a number greater than 0."
    return "";
  } else if (userNumber) {
    var countArray = [];
    var counter = 1;
    while (counter <= userNumber) {
      if (counter % 3 === 0) {
        countArray.push("ping");
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
    $("#results").append("<li>" + pingPong(userNumber) + "</li>");
  });
});
