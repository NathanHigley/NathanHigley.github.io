function push(page) {

  var pid = page.dataset.id
  var elem = document.getElementById(pid)
  var list = document.querySelectorAll(".show")

  function move() {
    var pos = -50;
    var ext = 280;
    var id = setInterval(frame, 30);
    function frame() {
      if (pos >= ext) { //stop here
        clearInterval(id);
      }
      else {
        while (pos < ext) {
          pos++;
          elem.style.top = pos + 'px';
        }
      }
    }
  }

  function load() {
    list.forEach(function(item) {
      item.classList.remove("show");
    });
    document.getElementById(pid).classList.add("show");
  }
  load()
  move()
}

function pull(page) {

  var pid = page.dataset.id
  var elem = document.getElementById(pid)
  var list = document.querySelectorAll(".show")

  function back() {
    elem.style.top = '-50px';
  }

  function unload() {
    list.forEach(function(item) {
      item.classList.remove("show");
    })
  }
  back()
  unload()
}
