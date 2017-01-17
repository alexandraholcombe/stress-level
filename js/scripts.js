//Business Logic
var stressFactorsArray = [];
var stressLevel = 0;

var stressFactorsDisplayer = function () {
  $("input:checkbox[name=stress-factors]:checked").each(function() {
    var stressFactorsInput = $(this).val();
    $("#stress-factors-responses").append(stressFactorsInput + "<br>");
    stressFactorsArray.push(stressFactorsInput);
    stressLevel = stressFactorsArray.length;
  });

  if (stressLevel = 6) {
    $("#stress-level").append("You are very stressed!");
  } else if ((3 <= stressLevel) && (stressLevel <= 5)) {
    $("#stress-level").append("You experience moderate stress.");
  } else if ((1 <= stressLevel) && (stressLevel <= 2)) {
    $("#stress-level").append("You experience some stress.");
  } else {
    $("#stress-level").append("You aren't stressed at all!");
  };
};


//User Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#stress-level").show();
    $("#stress-factors-responses").show();
    stressFactorsDisplayer();
    $("#stress-survey").hide();
  });
});
