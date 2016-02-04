var leapYear = function(year) {
  if(((year >0 ) && (year % 4 === 0) && (year % 100 !== 0))
   || ((year >0 ) && (year % 400 === 0))){
      return true;
  }else if (isNaN(year)){
    alert("not a number")
  return false;
}else {
  return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (result === false) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
    event.preventDefault();
  });
});
