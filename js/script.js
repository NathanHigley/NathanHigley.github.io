//FUNCTIONS
function openLeft() {
  closeRight()
  document.getElementById("mainLeft").style.width = "285px";
}

function closeLeft() {
  document.getElementById("mainLeft").style.width = "0";
}

function openRight() {
  closeLeft()
  document.getElementById("mainRight").style.width = "285px";
}

function closeRight() {
  document.getElementById("mainRight").style.width = "0px";
}

function init() {
  document.getElementById("01").classList.add("trans");
}

function swap(page) {
  var id = page.dataset.id;
  var list = document.querySelectorAll(".trans");

  list.forEach(function(item) {
    item.classList.remove("trans");
  });
  document.getElementById(id).classList.add("trans");
}
