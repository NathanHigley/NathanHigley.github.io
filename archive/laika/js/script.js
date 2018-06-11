function openNav() {
  closeBib()
  document.getElementById("mainnav").style.width = "285px";
}

function closeNav() {
  document.getElementById("mainnav").style.width = "0";
}

function openBib() {
  closeNav()
  document.getElementById("bib").style.width = "285px";
}

function closeBib() {
  document.getElementById("bib").style.width = "0px";
}

var audio = new Audio('endless.mp3');
audio.loop = true;
audio.volume = 0.5;

function play() {
  audio.muted = true;
  audio.play();
  audio.muted = false;
}

function mute() {
  audio.pause();
}

function swap(page) {
  var id = page.dataset.id;
  var list = document.querySelectorAll(".trans");

  list.forEach(function(item) {
    item.classList.remove("trans");
  });
  document.getElementById(id).classList.add("trans");
}
