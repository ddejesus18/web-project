
var buttonOpen = document.getElementById("open-nav");

 var buttonClose = document.getElementById("close-nav");

var ellist = document.getElementById("list");

function enterNav() {
  var ellist = document.getElementById("list").style.display = "block";
 var buttonOpen = document.getElementById("open-nav").style.display = "none";
  var buttonClose = document.getElementById("close-nav").style.display = "block";
};

buttonOpen.onclick = enterNav;

function escapeNav() {
  var ellist = document.getElementById('list').style.display ="none";

   var buttonOpen = document.getElementById("open-nav").style.display = "block";
  var buttonClose = document.getElementById("close-nav").style.display = "none";
}

buttonClose.onclick = escapeNav;
