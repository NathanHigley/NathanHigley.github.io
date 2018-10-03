function push(page) {

  var pid = page.dataset.id
  var elem = document.getElementById(pid)
  var list = document.querySelectorAll(".show")
  var pos = -200;
  var ext = 280;

  function move() {
    var id = setInterval(frame, 10);
    function frame() {
      if (pos != ext) {
        pos = pos + 20;
      }
      else {
        clearInterval(id);
      }
      elem.style.top = pos + 'px';
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
    elem.style.top = '-200px';
  }

  function unload() {
    list.forEach(function(item) {
      item.classList.remove("show");
    })
  }
  back()
  unload()
}
