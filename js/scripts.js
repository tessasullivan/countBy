function countByNumbers (countBy, countTo) {
  var outputString = "";
  if(countBy < countTo){

    for (var index = countBy; index <= countTo; index += countBy) {
      outputString += index + ", ";
    };
  } else{
    outputString = "Count To must be greater than Count By!";
  }
  return outputString;
}

$(function(){
  $('#countByForm').submit(function(event){
    event.preventDefault();
    var countBy = parseInt($('#countBy').val());
    var countTo = parseInt($('#countTo').val());

    if (countBy && countTo) {
      var outputString = countByNumbers(countBy, countTo);
      $('#output').empty();
      $('#output').append("<p>" + outputString + "</p>");

    } else {
      alert("Please enter values for both fields.");
    }
  });
});
