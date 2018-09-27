function push(page) {

  var pid = page.dataset.id

  function move() {
    var elem = document.getElementById(pid);
    var pos = -50;
    var id = setInterval(frame, 10);
    function frame() {
      ext = 275;//extent
      if (pos >= ext) { //stop here
        clearInterval(id);
      }
      else {
        pos = pos + (ext/5);//speed
        elem.style.top = pos + 'px';
      }
    }
  }

  function load() {
    var list = document.querySelectorAll(".show");
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

  function back() {
    var elem = document.getElementById(pid);
    elem.style.top = '-50px';
  }

  function unload() {
    var list = document.querySelectorAll(".show");
    list.forEach(function(item) {
      item.classList.remove("show");
    })
  }

  back()
  unload()
}
