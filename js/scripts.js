// back-end logic goes here



// user-interface logic goes here
$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#user-input").val());

    $(".results").show();
    $("#results").append("<li> some results </li>");
  });
});
