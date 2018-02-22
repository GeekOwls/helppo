$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});

$(document).ready(function(){
  $("#counter").countdown({
  until: new Date(2018, 4, 1),
  format: 'dHMS'
  });

  $("#counter_wrapper").fitText(0.1, {
  minFontSize: '10px',
  maxFontSize: '15px'
  });
});