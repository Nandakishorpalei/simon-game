
$("#green").click(function(){
  var number=Math.floor(Math.random() * 101);
if(number%5==0){
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    $("#level-title").text("Oops Number " +number+", Game Over Press Any Key To Restart");
    setTimeout(function(){$("#level-title").text("Press A Key to Start");},3000);
  }
  else{
  var audio=new Audio("sounds/green.mp3");
  audio.play();
  var audio=new Audio("sounds/blue.mp3");
  audio.play();
  $("body").addClass("redcolor");
  setTimeout(function(){ $("body").removeClass("redcolor");}, 100);
    }
});

$("#red").click(function(){
  var number=Math.floor(Math.random() * 101);
if(number%5==0){
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    $("#level-title").text("Oops Number " +number+", Game Over Press Any Key To Restart");
    setTimeout(function(){$("#level-title").text("Press A Key to Start");},3000);
  }
  else{
  var audio=new Audio("sounds/red.mp3");
  audio.play();
  var audio=new Audio("sounds/yellow.mp3");
  audio.play();
  $("body").addClass("redcolor");
  setTimeout(function(){ $("body").removeClass("redcolor");}, 100);
}
});

$("#yellow").click(function(){
  var number=Math.floor(Math.random() * 101);
if(number%5==0){
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    $("#level-title").text("Oops Number " +number+", Game Over Press Any Key To Restart");
    setTimeout(function(){$("#level-title").text("Press A Key to Start");},3000);
  }
  else{
  var audio=new Audio("sounds/green.mp3");
  audio.play();
  var audio=new Audio("sounds/red.mp3");
  audio.play();
  $("body").addClass("redcolor");
  setTimeout(function(){ $("body").removeClass("redcolor");}, 100);
}
});

$("#blue").click(function(){
  var number=Math.floor(Math.random() * 101);
if(number%5==0){
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    $("#level-title").text("Oops Number " +number+", Game Over Press Any Key To Restart");
    setTimeout(function(){$("#level-title").text("Press A Key to Start");},3000);
  }
  else{
  var audio=new Audio("sounds/blue.mp3");
  audio.play();
  var audio=new Audio("sounds/yellow.mp3");
  audio.play();
  $("body").addClass("redcolor");
  setTimeout(function(){ $("body").removeClass("redcolor");}, 100);
}
});
