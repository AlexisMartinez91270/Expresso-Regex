"use strict";

const txt = document.getElementById("txt");
console.log(txt);
const expR = document.getElementById("expR");
console.log(expR);
const match = document.getElementById("match");
const btnTest = document.getElementById("btnTest");
let resultList = document.getElementById("resultList");
let resultat;
let li;

const initRegex = function () {
  const regex = new RegExp(`${expR.innerText}`, "g");
  console.log(regex);
  return regex;
};

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

const createList = function () {
  let startText = txt.innerText;
  console.log(resultat);
  resultList.innerHTML = "";
  for (let i = 0; i < resultat.length; i++) {
    let li = document.createElement("li");
    li.innerText = resultat[i];
    li.onclick = function select() {
      txt.innerHTML = startText;
      let txtMatch = li.innerText;
      console.log(txtMatch);
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
    };
    resultList.appendChild(li);
  }
  li = document.querySelectorAll("li");
};

const testTxt = function () {
  const regex = initRegex();
  let vide = testVide();
  if (vide === null) {
    resultat = Array.from(regex[Symbol.matchAll](txt.innerText));
  }
  createList();
};

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
  console.log(resultat);
};

const regularExpression = function (nom) {
  let expReg;
  if (nom == "email") {
    expReg = "[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}";
  } else if (nom == "ip") {
    expReg = "\\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\\.|$)){4}\\b";
  }
  const regex = new RegExp(expReg, "g");
  let vide = testVide();
  if (vide === null) {
    resultat = Array.from(regex[Symbol.matchAll](txt.value));
  }
  createList();
  console.log(resultat);
};

// Textarea focus
txt.addEventListener("focus", function () {
  if (txt.innerText == "insert your text here") {
    txt.innerHTML = "";
  }
});
expR.addEventListener("focus", function () {
  if (expR.innerText == "insert your epression here") {
    expR.innerHTML = "";
  }
});

const textarea = document.getElementsByClassName("textarea");

// Themes
const body = document.querySelector("body");

function dark() {
  body.style.backgroundColor = "black";
  body.style.color = "rgb(163, 162, 162)";
  for (let i = 0; i < textarea.length; i++) {
    textarea[i].style.backgroundColor = "#222";
    textarea[i].style.color = "rgb(163, 162, 162)";
    textarea[i].style.borderColor = "white";
  }
  btnTest.style.backgroundColor = "white";
  btnTest.style.color = "black";
  btnTest.style.borderColor = "white";
  btnTest.addEventListener("mouseover", function () {
    btnTest.style.backgroundColor = "rgb(163, 162, 162)";
    btnTest.style.color = "black";
  });
  btnTest.addEventListener("mouseout", function () {
    btnTest.style.backgroundColor = "white";
    btnTest.style.color = "black";
  });
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
    textarea[i].style.borderColor = "gray";
  }
  btnTest.style.borderColor = "gray";
  btnTest.style.backgroundColor = "white";
  btnTest.style.color = "black";
  btnTest.addEventListener("mouseover", function () {
    btnTest.style.backgroundColor = "rgb(202, 201, 201)";
    btnTest.style.color = "black";
  });
  btnTest.addEventListener("mouseout", function () {
    btnTest.style.backgroundColor = "white";
    btnTest.style.color = "black";
  });
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
    textarea[i].style.borderColor = "black";
  }
  btnTest.style.borderColor = "black";
  btnTest.style.backgroundColor = "rgb(202, 201, 201)";
  btnTest.style.color = "black";
  btnTest.addEventListener("mouseover", function () {
    btnTest.style.backgroundColor = "#999";
    btnTest.style.color = "black";
  });
  btnTest.addEventListener("mouseout", function () {
    btnTest.style.backgroundColor = "rgb(202, 201, 201)";
    btnTest.style.color = "black";
  });

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
  body.style.color = "black";
  for (let i = 0; i < textarea.length; i++) {
    textarea[i].style.backgroundColor = "white";
    textarea[i].style.color = "black";
    textarea[i].style.borderColor = "rgb(6, 107, 189)";
  }
  btnTest.style.borderColor = "gb(6, 107, 189)";
  btnTest.style.backgroundColor = "white";
  btnTest.style.color = "black";
  btnTest.addEventListener("mouseover", function () {
    btnTest.style.backgroundColor = "rgb(6, 107, 189)";
    btnTest.style.color = "white";
  });
  btnTest.addEventListener("mouseout", function () {
    btnTest.style.backgroundColor = "white";
    btnTest.style.color = "black";
  });
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
