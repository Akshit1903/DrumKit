
var drumButtons=document.querySelectorAll(".drum");
function makeMusic(keyStroke){
  switch (keyStroke) {
    case "w":
      var audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio=new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log("Key stroke not found");
  }
}
// Detecting Button Press
for(var i=0;i<drumButtons.length;i++){
  console.log(i);
  drumButtons[i].addEventListener("click",function (){
    var keyStroke=this.textContent;
    makeMusic(keyStroke);
    buttonAnimation(keyStroke);
  });
}
// Detecting Keyboard Press
document.addEventListener("keydown",function(e){
  console.log(e.key);
  makeMusic(e.key);
  buttonAnimation(e.key);
});
// Button Animation
function buttonAnimation(currentKey){
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
