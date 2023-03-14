let divBombonjera = document.getElementById("divBombonjera");
let divCokolada = document.getElementById("divCokolada");
let divSampanjac = document.getElementById("divSampanjac");
let inputRuze = document.getElementById("ruze");
let inputLjiljani = document.getElementById("ljiljani");
let inputGerberi = document.getElementById("gerberi");
let izracunajDugme = document.getElementById("izracunajDugme");
let spanBezPopusta = document.getElementById("bezPopusta");
let spanSaPopustom = document.getElementById("saPopustom");
let bombonjera = document.getElementById("bombonjera");
let cokolada = document.getElementById("čokolada");
let sampanjac = document.getElementById("šampanjac");
let kartica = document.getElementById("kartica");
let cenaRuza = 150;
let cenaLjiljana = 120;
let cenaGerbera = 70;
let poklon = 500;
/////////////////////////////////////////////////////////////////////////DUGME - IZRAČUNAJ CENU/////////////////////
izracunajDugme.addEventListener("click", () => {
  let brojRuza = inputRuze.value;
  let brojLjiljana = inputLjiljani.value;
  let brojGerbera = inputGerberi.value;
  let ukupnaCenaRuza = brojRuza * cenaRuza;
  let ukupnaCenaGerbera = brojGerbera * cenaGerbera;
  let ukupnaCenaLjiljana = brojLjiljana * cenaLjiljana;
  let ukupnaCena = ukupnaCenaRuza + ukupnaCenaGerbera + ukupnaCenaLjiljana;
  let inputCekiran = document.querySelector("input[name='placanje']:checked");
  let valuePlacanjaCekiran = inputCekiran.value;
  let valueBombonjera = bombonjera.value;
  let valueCokolada = cokolada.value;
  let valueSampanjac = sampanjac.value;
  if (brojRuza <= 0) {
    brojRuza = 0;
    inputRuze.value = "";
  } else {
    for (let i = 1; i <= brojRuza; i++) {
      let slikeRuza = document.getElementById("slikeRuza");
      let slikaR = document.createElement("img");
      slikaR.src = "1.jpg";
      slikeRuza.appendChild(slikaR);
    }
  }
  if (brojLjiljana <= 0) {
    brojLjiljana = 0;
    inputLjiljani.value = "";
  } else {
    for (let i = 1; i <= brojLjiljana; i++) {
      let slikeLjiljana = document.getElementById("slikeLjiljana");
      let slikaLjiljana = document.createElement("img");
      slikaLjiljana.src = "2.jpg";
      slikeLjiljana.appendChild(slikaLjiljana);
    }
  }
  if (brojGerbera <= 0) {
    brojGerbera = 0;
    inputGerberi.value = "";
  } else {
    for (let i = 1; i <= brojGerbera; i++) {
      let slikeGerbera = document.getElementById("slikeGerbera");
      let slikaGerbera = document.createElement("img");
      slikaGerbera.src = "3.jpg";
      slikeGerbera.appendChild(slikaGerbera);
    }
  }
  if (bombonjera.checked == true) {
    divBombonjera.innerHTML = `<p>+${valueBombonjera}</p>`;
    ukupnaCena += poklon;
  }
  if (cokolada.checked == true) {
    divCokolada.innerHTML = `<p>+${valueCokolada}</p>`;
    ukupnaCena += poklon;
  }
  if (sampanjac.checked == true) {
    divSampanjac.innerHTML = `<p>+${valueSampanjac}</p>`;
    ukupnaCena += poklon;
  }
  if (ukupnaCena > 2000 && valuePlacanjaCekiran == "kartica") {
    spanBezPopusta.innerHTML = ukupnaCena + " din.";
    spanSaPopustom.innerHTML = ukupnaCena - ukupnaCena * 0.1 + " din.";
  } else {
    spanBezPopusta.innerHTML = ukupnaCena + " din.";
    spanSaPopustom.innerHTML = "Niste ostvarili popust.";
  }
  inputRuze.disabled = true;
  inputGerberi.disabled = true;
  inputLjiljani.disabled = true;
  bombonjera.disabled = true;
  cokolada.disabled = true;
  sampanjac.disabled = true;
  kes.disabled = true;
  kartica.disabled = true;
  izracunajDugme.disabled = true;
});
///////////////////////////////////////////////////////////DUGME - RESETUJ///////////////////////
let resetujDugme = document.getElementById("resetujDugme");
resetujDugme.addEventListener("click", () => {
  inputRuze.value = "";
  inputGerberi.value = "";
  inputLjiljani.value = "";
  let inputs = document.getElementsByTagName("input");
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "kes") {
      inputs[i].checked = true;
    } else {
      inputs[i].checked = false;
    }
  }
  slikeRuza.innerHTML = ``;
  slikeGerbera.innerHTML = ``;
  slikeLjiljana.innerHTML = ``;
  divBombonjera.innerHTML = ``;
  divCokolada.innerHTML = ``;
  divSampanjac.innerHTML = ``;
  spanBezPopusta.innerHTML = "";
  spanSaPopustom.innerHTML = "";
  inputRuze.disabled = false;
  inputGerberi.disabled = false;
  inputLjiljani.disabled = false;
  bombonjera.disabled = false;
  cokolada.disabled = false;
  sampanjac.disabled = false;
  kes.disabled = false;
  kartica.disabled = false;
  izracunajDugme.disabled = false;
});
