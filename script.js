"use strict";

const txt = document.getElementById("txt");
console.log(txt);
const expR = document.getElementById("expR");
console.log(expR);
const txtExpR = document.getElementById("txtExpR");
const btnEnv = document.getElementById("btnEnv");
const btnTest = document.getElementById("btnTest");
const btnMail = document.getElementById("btnMail");
const btnIP = document.getElementById("btnIP");
let resultat;

const initRegex = function () {
  const regex = new RegExp(`${expR.value}`, "g");
  console.log(regex);
  return regex;
};

const testVide = function () {
  if (txt.value == "" && expR.value == "") {
    resultat = "Veuillez rentrez du texte et votre expression régulière";
  } else if (expR.value == "") {
    resultat = "Veuillez rentrez votre expression régulière";
  } else if (txt.value == "") {
    resultat = "Veuillez rentrez du texte";
  } else {
    resultat = null;
  }
  return resultat;
};

const envoiTxt = function () {
  txtExpR.style.color = "black";
  const regex = initRegex();
  let vide = testVide();
  if (vide === null) {
    resultat = Array.from(regex[Symbol.matchAll](txt.value));
  }
  for (let i = 0; i < resultat.length; i++) {
    txtExpR.textContent += `${i + 1}. ${resultat[i]}\n`;
  }
  console.log(resultat);
};

btnEnv.addEventListener("click", envoiTxt);

const testExpR = function () {
  const regex = initRegex();
  let vide = testVide();
  if (vide === null) {
    resultat = regex.test(txt.value);
    if (resultat) {
      resultat = "Au moins une correspondance";
      txtExpR.style.color = "green";
    } else {
      resultat = "Aucune correspondance";
      txtExpR.style.color = "red";
    }
  }
  txtExpR.textContent = resultat;
  console.log(resultat);
};

btnTest.addEventListener("click", testExpR);

const email = function () {
  txtExpR.style.color = "black";
  const expRMail = "[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}";
  const regex = new RegExp(expRMail, "g");
  let vide = testVide();
  if (vide === null) {
    resultat = Array.from(regex[Symbol.matchAll](txt.value));
  }
  txtExpR.textContent = resultat;
  console.log(resultat);
};

btnMail.addEventListener("click", email);

const ip = function () {
  txtExpR.style.color = "black";
  const expRIp = "\\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}\\b";
  const regex = new RegExp(expRIp, "g");
  let vide = testVide();
  if (vide === null) {
    resultat = Array.from(regex[Symbol.matchAll](txt.value));
  }
  txtExpR.textContent = resultat;
  console.log(resultat);
};

btnIP.addEventListener("click", ip);
