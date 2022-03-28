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
let li;

const initRegex = function () {
  const regex = new RegExp(`${expR.value}`, "g");
  console.log(regex);
  return regex;
};

const error = document.getElementById("error");

const testVide = function () {
  if (txt.value == "" && expR.value == "") {
    resultat = 1;
    error.textContent =
      "Veuillez rentrez du texte et votre expression régulière";
  } else if (expR.value == "") {
    resultat = 1;
    error.textContent = "Veuillez rentrez votre expression régulière";
  } else if (txt.value == "") {
    resultat = 1;
    error.textContent = "Veuillez rentrez du texte";
  } else {
    resultat = null;
  }
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
  li = document.querySelectorAll("li");
};

const testTxt = function () {
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

// Themes
const body = document.querySelector("body");
const button = document.querySelectorAll("button");

function dark() {
  body.style.backgroundColor = "black";
  body.style.color = "rgb(163, 162, 162)";
  for (let i = 0; i < textarea.length; i++) {
    button[i].style.backgroundColor = "white";
    button[i].style.color = "black";
    textarea[i].style.backgroundColor = "#222";
    textarea[i].style.color = "rgb(163, 162, 162)";
  }
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("mouseover", function () {
      button[i].style.backgroundColor = "rgb(163, 162, 162)";
      button[i].style.color = "black";
    });
    button[i].addEventListener("mouseout", function () {
      button[i].style.backgroundColor = "white";
      button[i].style.color = "black";
    });
  }
  for (let i = 0; i < li.length; i++) {
    li[i].style.color = "rgb(163, 162, 162)";
    li[i].addEventListener("mouseover", function () {
      li[i].style.color = "white";
      li[i].style.fontWeight = "bold";
    });
    li[i].addEventListener("mouseout", function () {
      li[i].style.color = "rgb(163, 162, 162)";
      li[i].style.fontWeight = "normal";
    });
  }
}

function gray() {
  body.style.backgroundColor = "#222";
  body.style.color = "rgb(202, 201, 201)";
  for (let i = 0; i < textarea.length; i++) {
    textarea[i].style.backgroundColor = "#333";
    textarea[i].style.color = "rgb(202, 201, 201)";
  }
  for (let i = 0; i < button.length; i++) {
    button[i].style.backgroundColor = "white";
    button[i].style.color = "black";
    button[i].addEventListener("mouseover", function () {
      button[i].style.backgroundColor = "rgb(202, 201, 201)";
      button[i].style.color = "black";
    });
    button[i].addEventListener("mouseout", function () {
      button[i].style.backgroundColor = "white";
      button[i].style.color = "black";
    });
  }
  for (let i = 0; i < li.length; i++) {
    li[i].style.color = "rgb(202, 201, 201)";
    li[i].addEventListener("mouseover", function () {
      li[i].style.color = "white";
      li[i].style.fontWeight = "bold";
    });
    li[i].addEventListener("mouseout", function () {
      li[i].style.color = "rgb(163, 162, 162)";
      li[i].style.fontWeight = "normal";
    });
  }
}

function white() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  for (let i = 0; i < textarea.length; i++) {
    textarea[i].style.backgroundColor = "rgb(202, 201, 201)";
    textarea[i].style.color = "black";
  }
  for (let i = 0; i < button.length; i++) {
    button[i].style.backgroundColor = "rgb(202, 201, 201)";
    button[i].style.color = "black";
    button[i].addEventListener("mouseover", function () {
      button[i].style.backgroundColor = "#999";
      button[i].style.color = "black";
    });
    button[i].addEventListener("mouseout", function () {
      button[i].style.backgroundColor = "rgb(202, 201, 201)";
      button[i].style.color = "black";
    });
  }
  for (let i = 0; i < li.length; i++) {
    li[i].style.color = "black";
    li[i].addEventListener("mouseover", function () {
      li[i].style.color = "#999";
      li[i].style.fontWeight = "bold";
    });
    li[i].addEventListener("mouseout", function () {
      li[i].style.color = "black";
      li[i].style.fontWeight = "normal";
    });
  }
}

function blue() {
  body.style.backgroundColor = "lightblue";
  body.style.color = "white";
  for (let i = 0; i < textarea.length; i++) {
    textarea[i].style.backgroundColor = "white";
    textarea[i].style.color = "black";
  }
  for (let i = 0; i < button.length; i++) {
    button[i].style.backgroundColor = "white";
    button[i].style.color = "black";
    button[i].addEventListener("mouseover", function () {
      button[i].style.backgroundColor = "rgb(6, 107, 189)";
      button[i].style.color = "white";
    });
    button[i].addEventListener("mouseout", function () {
      button[i].style.backgroundColor = "white";
      button[i].style.color = "black";
    });
  }
  for (let i = 0; i < li.length; i++) {
    li[i].style.color = "white";
    li[i].addEventListener("mouseover", function () {
      li[i].style.color = "rgb(6, 107, 189)";
      li[i].style.fontWeight = "bold";
    });
    li[i].addEventListener("mouseout", function () {
      li[i].style.color = "white";
      li[i].style.fontWeight = "normal";
    });
  }
}
