function swap(page) {
  var id = page.dataset.id;
  var list = document.querySelectorAll(".show");
  list.forEach(function(item) {
    item.classList.remove("show");
  });
  document.getElementById(id).classList.add("show");
}
