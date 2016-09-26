var currentPos = 0;

function youWin(){
  alert("YOU WIN");
}

function move() {
  console.log( Math.round(Math.random() * 1000) );
  
  var jerkbutton = document.getElementById("jerk");
var yPos = Math.round(Math.random() * 500);
var xPos = Math.round(Math.random() * 500);  
  jerkbutton.style.marginTop = yPos + "px";
    jerkbutton.style.marginLeft = xPos + "px";
  
    currentPos = yPos;
  if( Math.abs(yPos - currentPos < 250 ) ){
    yPos = yPos + 250;
  }
//   if(jerkbutton.classList == ""){
    
  
//   jerkbutton.classList = "move";
//   } else if (jerkbutton.classList == "move"){
//     jerkbutton.classList = "";
//   }
}