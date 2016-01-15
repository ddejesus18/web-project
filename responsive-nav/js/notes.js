/* The task should be as follow:
when the bar is clicked, display the nav list and also be able to click on the items and be directed to where those items are located on the page. The nav should toggle to the right slowly

//var for the button
var buttonOpen = document.getElementById("open-nav");
/*var for the X of nav when opened so that it can be closed
 var buttonClose = document.getElementById("close-nav");

/* event handler hides and shows various elements

function handler() {
  var elMenu = document.getElementById('list').style.display = "block";
 var bars = document.getElementById('open-nav').style.display = "none";
  var buttonClose = document.getElementById("close-nav").style.display = "block";
}

/* initially had addEventListener but it is not supported un certain broswer so went wit the widely supported format of event listening. After changing it, my second event handler worked
buttonOpen.onclick = handler;


/* second handler to deal with escaping navigation
function escapeNav() {
  var ellist = document.getElementById('list').style.display ='none';

   var bars = document.getElementById('open-nav').style.display = "block";

  var buttonClose = document.getElementById("close-nav").style.display = "none";
}

buttonClose.onclick = escapeNav;

*/
