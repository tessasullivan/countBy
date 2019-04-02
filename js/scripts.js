function countByNumbers (countBy, countTo) {
  var outputString = "";
  for (var index = countBy; index <= countTo; index += countBy) {
    outputString += index + ", ";
  };
  return outputString;
}

$(function(){
  $('#countByForm').submit(function(event){
    event.preventDefault();
    var countBy = parseInt($('#countBy').val());
    var countTo = parseInt($('#countTo').val());
    var outputString = countByNumbers(countBy, countTo);
    $('#output').append("<p>" + outputString + "</p>");
  });
});
