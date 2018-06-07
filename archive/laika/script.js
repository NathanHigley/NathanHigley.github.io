function openNav() {
  document.getElementById("mainnav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mainnav").style.width = "0";
}

function openBib() {
  document.getElementById("bib").style.width = "250px";
}

function closeBib() {
  document.getElementById("bib").style.width = "0px";
}

var audio = new Audio('endless.mp3');
function play() {
  audio.muted = true;
  audio.play();
  audio.muted = false;
}

function mute() {
  audio.muted = true;
}

function swap(page){
  var id = page.dataset.id;
  var list = document.querySelectorAll(".trans");

  list.forEach(function(item) {
    item.classList.remove("trans");
  });
  document.getElementById(id).classList.add("trans");
}
