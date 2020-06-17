
btn.addEventListener("click" ,function() {
  var nome = document.getElementById("nome").value;
  var km = document.getElementById("km").value;
  var cat = document.getElementById("cat").value;
  var btn = document.getElementById("btn");
  // Sollevo eccezioni
  if (nome === "") {
    alert("Il campo km non può essere vuoto!");
    location.reload()
  }
    // if (km === "") {
    //   alert("Il campo km non può essere vuoto!");
    // }
    //
    if (km <= 0) {
      alert("Non sono ammessi caratteri o km minori di 0 nel campo km :)");
    }

  var tot;
  var kmE = 0.21;
  var vagoneMin = 1;
  var vagoneaMax = 15;
  var numTrenMin = 1000;
  var numTrenMax = 9999;

  if (cat == "minorenne") {
    tot = km * kmE - 20/100 * (km * kmE);
  } else if (cat == "over65") {
    tot = km * kmE - 40/100 * (km * kmE);
  } else {
    tot = km * kmE;
  }

  var trenoN = Math.floor(Math.random() * (numTrenMax - numTrenMin + 1)) + numTrenMin;
  var vagone =  Math.floor(Math.random() * (vagoneaMax - vagoneMin + 1)) + vagoneMin;
  document.getElementById("passenger").innerHTML = nome;
  document.getElementById("trenoN").innerHTML = trenoN;
  document.getElementById("vagone").innerHTML = vagone;
  document.getElementById("totTicket").innerHTML = tot.toFixed(2);
  document.getElementById("passCat").innerHTML = cat;

  document.getElementById("ticket").className = "show";
});

function cancF() {
  document.getElementById("ticket").className = "hidden";
  document.getElementById("nome").value = "";
  document.getElementById("km").value = "";
  document.getElementById("cat").value = "maggiorenne";

}
