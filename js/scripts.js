$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userNameInput = $("input#userName").val();
    const petsName = $("input#petsName").val();
    const summerActivities = $("input#summerActivities").val();

    $(".userName").text(userNameInput);
    $(".petsName").text(petsName);
    $(".summerActivities").text(summerActivities);

    $("#letter-received").show();
  });
})