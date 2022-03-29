"use strict";

// Datas
const txt = document.getElementById("txt");
const expR = document.getElementById("expR");
const match = document.getElementById("match");
const btnTest = document.getElementById("btnTest");
let resultList = document.getElementById("resultList");
let resultat;
let li;

// Initialisation de la Regex
const initRegex = function () {
  const regex = new RegExp(`${expR.innerText}`, "g");
  return regex;
};

// Test si vide
const error = document.getElementById("error");

const testVide = function () {
  if (txt.innerText == "" && expR.innerText == "") {
    resultat = 1;
    error.textContent =
      "Veuillez rentrez du texte et votre expression régulière";
  } else if (expR.innerText == "") {
    resultat = 1;
    error.textContent = "Veuillez rentrez votre expression régulière";
  } else if (txt.innerText == "") {
    resultat = 1;
    error.textContent = "Veuillez rentrez du texte";
  } else {
    resultat = null;
  }
  return resultat;
};

// Creation de la list
const createList = function () {
  let startText = txt.innerText;
  resultList.innerHTML = "";
  for (let i = 0; i < resultat.length; i++) {
    let li = document.createElement("li");
    li.innerText = resultat[i];
    // Creation de la selection du texte lors des onclick li
    li.onclick = function select() {
      txt.innerHTML = startText;
      let txtMatch = li.innerText;
      var innerHTML = txt.innerHTML;
      var index = innerHTML.indexOf(txtMatch);
      if (index >= 0) {
        innerHTML =
          innerHTML.substring(0, index) +
          "<span class='highlight'>" +
          innerHTML.substring(index, index + txtMatch.length) +
          "</span>" +
          innerHTML.substring(index + txtMatch.length);
        txt.innerHTML = innerHTML;
      }
      // Autre méthode (fonctionne seulement si txt est un texarea/input)
      /*txt.focus()
      txt.setSelectionRange(index, index + txtMatch.length);*/
    };
    resultList.appendChild(li);
  }
  li = document.querySelectorAll("li");
};

// Fonction principale
const testTxt = function () {
  const regex = initRegex();
  let vide = testVide();
  if (vide === null) {
    resultat = Array.from(regex[Symbol.matchAll](txt.innerText));
  }
  createList();
};

// Création et affichage du Match/No Match
btnTest.addEventListener("click", testTxt);

onkeyup = function () {
  const regex = initRegex();
  resultat = regex.test(txt.innerText);
  if (txt.innerText == "" || expR.innerText == "") {
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
};

// Fonction des expressions régulières classiques
const regularExpression = function (type) {
  let expReg;
  if (type == "email") {
    expReg = "[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}";
  } else if (type == "ip") {
    expReg = "\\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}\\b";
  } else if (type == "phone") {
    expReg = "[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}";
  }
  const regex = new RegExp(expReg, "g");
  let vide = testVide();
  if (vide === null) {
    resultat = Array.from(regex[Symbol.matchAll](txt.value));
  }
  createList();
};

// Textarea focus
txt.addEventListener("focus", function () {
  if (txt.innerText == "insert your text here") {
    txt.innerHTML = "";
  }
});
expR.addEventListener("focus", function () {
  if (expR.innerText == "insert your expression here") {
    expR.innerHTML = "";
  }
});

// Themes
const body = document.querySelector("body");
const textarea = document.getElementsByClassName("textarea");

function themes(couleur) {
  let bgColor, txtColor, borderColor, hoverColor, textareaColor, btnColor;

  if (couleur == "gray") {
    bgColor = "#222";
    txtColor = "rgb(202, 201, 201)";
    borderColor = "gray";
    hoverColor = "rgb(148, 147, 147)";
    textareaColor = "rgb(202, 201, 201)";
    btnColor = "rgb(202, 201, 201)";
  }
  if (couleur == "dark") {
    bgColor = "black";
    txtColor = "white";
    borderColor = "white";
    hoverColor = "rgb(163, 162, 162)";
    textareaColor = "#222";
    btnColor = "white";
  }
  if (couleur == "white") {
    bgColor = "white";
    txtColor = "black";
    borderColor = "black";
    hoverColor = "rgb(148, 147, 147)";
    textareaColor = "rgb(202, 201, 201)";
    btnColor = "rgb(202, 201, 201)";
  }
  if (couleur == "blue") {
    bgColor = "lightblue";
    txtColor = "black";
    borderColor = "rgb(6, 107, 189)";
    hoverColor = "rgb(3, 68, 121)";
    textareaColor = "white";
    btnColor = "rgb(6, 107, 189)";
  }

  body.style.backgroundColor = bgColor;
  body.style.color = txtColor;
  for (let i = 0; i < textarea.length; i++) {
    textarea[i].style.backgroundColor = textareaColor;
    textarea[i].style.color = txtColor;
    textarea[i].style.borderColor = borderColor;
  }
  btnTest.style.backgroundColor = btnColor;
  btnTest.style.color = "black";
  btnTest.addEventListener("mouseover", function () {
    btnTest.style.backgroundColor = hoverColor;
    btnTest.style.color = "black";
  });
  btnTest.addEventListener("mouseout", function () {
    btnTest.style.backgroundColor = btnColor;
    btnTest.style.color = "black";
  });
  for (let i = 0; i < li.length; i++) {
    li[i].style.color = txtColor;
    li[i].addEventListener("mouseover", function () {
      li[i].style.color = hoverColor;
      li[i].style.fontWeight = "bold";
    });
    li[i].addEventListener("mouseout", function () {
      li[i].style.color = txtColor;
      li[i].style.fontWeight = "normal";
    });
  }
}
