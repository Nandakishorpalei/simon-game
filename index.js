
$("#green").click(function(){
  var number=Math.floor(Math.random() * 101);
if(number%5==0){
    var audio=new Audio("wrong.mp3");
    audio.play();
    $("#level-title").text("Oops Number " +number+", Game Over Press Any Key To Restart");
    setTimeout(function(){$("#level-title").text("Press A Key to Start");},2000);
  }
  else{
  var audio=new Audio("green.mp3");
  audio.play();
  var audio=new Audio("blue.mp3");
  audio.play();
  $("body").addClass("redcolor");
  $("#level-title").text("Number " +number+", Press A Color To Continue");
  setTimeout(function(){ $("body").removeClass("redcolor");}, 100);

    }
});

$("#red").click(function(){
  var number=Math.floor(Math.random() * 101);
if(number%5==0){
    var audio=new Audio("wrong.mp3");
    audio.play();
    $("#level-title").text("Oops Number " +number+", Game Over Press Any Key To Restart");
    setTimeout(function(){$("#level-title").text("Press A Key to Start");},2000);
  }
  else{
  var audio=new Audio("red.mp3");
  audio.play();
  var audio=new Audio("yellow.mp3");
  audio.play();
  $("body").addClass("redcolor");
    $("#level-title").text("Number " +number+", Press A Color To Continue");
  setTimeout(function(){ $("body").removeClass("redcolor");}, 100);
}
});

$("#yellow").click(function(){
  var number=Math.floor(Math.random() * 101);
if(number%5==0){
    var audio=new Audio("wrong.mp3");
    audio.play();
    $("#level-title").text("Oops Number " +number+", Game Over Press Any Key To Restart");
    setTimeout(function(){$("#level-title").text("Press A Key to Start");},2000);
  }
  else{
  var audio=new Audio("green.mp3");
  audio.play();
  var audio=new Audio("red.mp3");
  audio.play();
  $("body").addClass("redcolor");
    $("#level-title").text("Number " +number+", Press A Color To Continue");
  setTimeout(function(){ $("body").removeClass("redcolor");}, 100);
}
});

$("#blue").click(function(){
  var number=Math.floor(Math.random() * 101);
if(number%5==0){
    var audio=new Audio("wrong.mp3");
    audio.play();
    $("#level-title").text("Oops Number " +number+", Game Over Press Any Key To Restart");
    setTimeout(function(){$("#level-title").text("Press A Key to Start");},2000);
  }
  else{
  var audio=new Audio("blue.mp3");
  audio.play();
  var audio=new Audio("yellow.mp3");
  audio.play();
  $("body").addClass("redcolor");
    $("#level-title").text("Number " +number+", Press A Color To Continue");
  setTimeout(function(){ $("body").removeClass("redcolor");}, 100);
}
});
