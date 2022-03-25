"use strict";

const txt = document.getElementById("txt");
console.log(txt);
const expR = document.getElementById("expR");
console.log(expR);
const match = document.getElementById("match");
const txtExpR = document.getElementById("txtExpR");
const btnTest = document.getElementById("btnTest");
const btnMail = document.getElementById("btnMail");
const btnIP = document.getElementById("btnIP");
let resultList = document.getElementById("resultList");
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
  resultList.innerHTML = "";
  let li = document.createElement("li");
  li.innerText = resultat;
  resultList.appendChild(li);
  return resultat;
};

const createList = function () {
  resultList.innerHTML = "";
  for (let i = 0; i < resultat.length; i++) {
    let li = document.createElement("li");
    li.innerText = resultat[i];
    li.onclick = function () {
      let long = resultat[i].toString();
      alert(long.length);
    };
    resultList.appendChild(li);
  }
};

const testTxt = function () {
  txtExpR.style.color = "rgb(202, 201, 201)";
  const regex = initRegex();
  let vide = testVide();
  if (vide === null) {
    resultat = Array.from(regex[Symbol.matchAll](txt.value));
  }
  createList();
  console.log(resultat);
};

btnTest.addEventListener("click", testTxt);

onkeyup = function () {
  const regex = initRegex();
  resultat = regex.test(txt.value);
  if (txt.value == "" || expR.value == "") {
    resultat = "No Match";
    match.style.color = "red";
  } else if (resultat) {
    resultat = "Match";
    match.style.color = "green";
  } else {
    resultat = "No Match";
    match.style.color = "red";
  }
  match.textContent = resultat;
  console.log(resultat);
};

const email = function () {
  txtExpR.style.color = "rgb(202, 201, 201)";
  const expRMail = "[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}";
  const regex = new RegExp(expRMail, "g");
  let vide = testVide();
  if (vide === null) {
    resultat = Array.from(regex[Symbol.matchAll](txt.value));
  }
  createList();
  console.log(resultat);
};

btnMail.addEventListener("click", email);

const ip = function () {
  txtExpR.style.color = "rgb(202, 201, 201)";
  const expRIp = "\\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}\\b";
  const regex = new RegExp(expRIp, "g");
  let vide = testVide();
  if (vide === null) {
    resultat = Array.from(regex[Symbol.matchAll](txt.value));
  }
  createList();
  console.log(resultat);
};

btnIP.addEventListener("click", ip);

const textarea = document.querySelectorAll("textarea");

for (let i = 0; i < textarea.length; i++) {
  textarea[i].addEventListener("focus", function () {
    textarea[i].textContent = "";
  });
}
