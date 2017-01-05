function flippy( elem ) {
  // console.log("flippy")
   // add 'active' classs to the element that was clicked
   
  if( elem.classList == "card"){
     
     elem.classList.add('flip');
  } else{
      elem.classList.remove('flip');
  }
 
}



function dispProg() {
  	// body...
    var progress = document.getElementById("innerprog");
   // var debug = document.getElementById("debug")
  
  var target = progress.dataset.target;
  var prog = progress.dataset.progress;
  var complete = 1 - (prog/target);
    // debug.innerHTML = complete;
  progress.style.width = complete*100+"%";
      progress.innerHTML = "$" + prog;
  // progress.style.backgroundColor = "green";
}
