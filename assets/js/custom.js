function flippy( elem ) {
  // console.log("flippy")
   // add 'active' classs to the element that was clicked
   
  if( elem.classList == "card"){
     
     elem.classList.add('flip');
  } else{
      elem.classList.remove('flip');
  }
 
}
