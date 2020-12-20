
$("#green").click(function(){
  var audio=new Audio("green.mp3");
  audio.play();
  var audio=new Audio("blue.mp3");
  audio.play();
  $("body").addClass("redcolor");
  $("#level-title").text("Game Over, Press Any Key To Restart");
  setTimeout(function(){ $("body").removeClass("redcolor");}, 100);
});

$("#red").click(function(){
  var audio=new Audio("red.mp3");
  audio.play();
  var audio=new Audio("yellow.mp3");
  audio.play();
  $("body").addClass("redcolor");
    $("#level-title").text("Game Over, Press Any Key To Restart");
  setTimeout(function(){ $("body").removeClass("redcolor");}, 100);
});

$("#yellow").click(function(){
  var audio=new Audio("green.mp3");
  audio.play();
  var audio=new Audio("red.mp3");
  audio.play();
  $("body").addClass("redcolor");
    $("#level-title").text("Game Over, Press Any Key To Restart");
  setTimeout(function(){ $("body").removeClass("redcolor");}, 100);
});

$("#blue").click(function(){
  var audio=new Audio("blue.mp3");
  audio.play();
  var audio=new Audio("yellow.mp3");
  audio.play();
  $("body").addClass("redcolor");
    $("#level-title").text("Game Over, Press Any Key To Restart");
  setTimeout(function(){ $("body").removeClass("redcolor");}, 100);
});
