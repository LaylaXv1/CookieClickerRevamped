var cookiecount = 0;
var cursors = 0;
var cursorcost = 10;

function update() {
  document.getElementById("count").value = cookiecount;
  document.title = cookiecount + " Cookies";
  document.getElementById("cursorcost").innerHTML = cursorcost;
  document.getElementById("cursors").innerHTML = cursors;
}

function timer() {
  cookiecount = cookiecount + cursors;
  update();
}

setInterval(timer, 1000);

function buycursor() {
  if (cookiecount >= cursorcost) {
    cookiecount = cookiecount - cursorcost;
    cursorcost = cursorcost + 5;
    cursors = cursors + 1;
    update();
  }
}

function add() {
  cookiecount = cookiecount + 1;
  update();
}

function save() {
  localStorage.setItem("cookiecount", cookiecount);
}

function load() {
  cookiecount = localStorage.getItem("cookiecount");
  cookiecount = parseInt(cookiecount);
  update();
}
