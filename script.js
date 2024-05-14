let detik = document.getElementById("det");
let menit = document.getElementById("7");
let jam = document.getElementById("9");
let mili = document.getElementById("8");
let multop = document.getElementById("mul");
let ulang = document.getElementById("ul");
let det = 0;
let deti = 0;
let menitt = 0;
let jamm = 0;
let stop = document.getElementById("stop");
multop.onclick = hae;
document.getElementById("stop").style.display = "none";
function haha() {
  deti = 0;
  jamm = 0;
  menitt = 0;
  detik.innerHTML = "00";
  menit.innerHTML = "00";
  mili.innerHTML = "00";
  jam.innerHTML = "00";
  det = 0;
}

function hae() {
  var alamak = setInterval(function () {
    document.getElementById("mul").style.display = "none";
    document.getElementById("stop").style.display = "block";
    det = det + 1;
    if (det == 100) {
      det = det - 100;
    }

    if (det < 10) {
      mili.innerHTML = "0" + det;
    } else {
      mili.innerHTML = det;
    }
  }, 10);
  var hhhhh = setInterval(function () {
    deti = deti + 1;
    if (deti == 60) {
      deti = deti - 60;
      menitt = menitt + 1;
    }
    if (menitt == 60) {
      menitt = menitt - 60;
      jamm = jamm + 1;
    }
    if (deti < 10) {
      detik.innerHTML = "0" + deti;
    } else {
      detik.innerHTML = deti;
    }
    if (menitt < 10) {
      menit.innerHTML = "0" + menitt;
    } else {
      menit.innerHTML = menitt;
    }
    if (jamm < 10) {
      jam.innerHTML = "0" + jamm;
    } else {
      jam.innerHTML = jamm;
    }
  }, 975);

  stop.onclick = berhenti;
  function berhenti() {
    document.getElementById("stop").style.display = "none";
    letmultop = document.getElementById("mul").style.display = "block";
    clearInterval(alamak);
    clearInterval(hhhhh);
  }
}
