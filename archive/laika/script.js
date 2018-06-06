function openNav() {
  document.getElementById("mainnav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mainnav").style.width = "0";
}

function swap(page){
   var id = page.dataset.id;
   var list = document.querySelectorAll(".trans");

   list.forEach(item) {
      item.classList.remove("trans");
   });
   document.getElementById(id).classList.add("trans");
}
