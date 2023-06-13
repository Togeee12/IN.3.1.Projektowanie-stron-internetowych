// Pobieranie danych z bazy
window.addEventListener('load', () => {
  const localDatabase = JSON.parse(localStorage.getItem('users'));
  const loggedEmail = localStorage.getItem('logged');
  if (!loggedEmail) {
      window.replace.location = '../../index.html';
  };
  const loggedUser = localDatabase[loggedEmail].User;
  let spanWelcome = document.querySelector('.welcome-user');
  // Dodawanie danych aktualnie zalogowanego użytkownika w menu
  document.querySelector('.User').innerText = loggedUser;
  document.querySelector('.Email').innerText = loggedEmail;
  document.querySelector('.welcome-user').innerText = loggedUser;
  spanWelcome.setAttribute("title", loggedEmail);
});

const xOffset = document.getElementById("x-offset");
const yOffset = document.getElementById("y-offset");
const blurRadius = document.getElementById("blur-radius");
const spreadRadius = document.getElementById("spread-radius");
const color = document.getElementById("color");
const box = document.querySelector(".box");
const copyCodeBtn = document.getElementById("copy-code-btn");
const resetBtn = document.getElementById("reset-btn");
const codeTextarea = document.getElementById("code");

function updateBoxShadow() {
  const x = xOffset.value + "px";
  const y = yOffset.value + "px";
  const blur = blurRadius.value + "px";
  const spread = spreadRadius.value + "px";
  const shadowColor = color.value;
  const boxShadow = `${x} ${y} ${blur} ${spread} ${shadowColor}`;
  box.style.boxShadow = boxShadow;
  copyCodeBtn.dataset.clipboardText = `box-shadow: ${boxShadow};`;
  codeTextarea.value = `box-shadow: ${boxShadow};`;
}

function copyCodeToClipboard() {
  const clipboardText = copyCodeBtn.dataset.clipboardText;
  const tempInput = document.createElement("input");
  tempInput.setAttribute("type", "text");
  tempInput.setAttribute("value", clipboardText);
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  copyCodeBtn.innerText = "Copied!";
  setTimeout(() => {
    copyCodeBtn.innerText = "Copy Code";
  }, 2000);
}

function resetControls() {
  xOffset.value = 0;
  yOffset.value = 0;
  blurRadius.value = 0;
  spreadRadius.value = 0;
  codeTextarea.value = '';
  color.value = "#000000";
  updateBoxShadow();
}

xOffset.addEventListener("input", updateBoxShadow);
yOffset.addEventListener("input", updateBoxShadow);
blurRadius.addEventListener("input", updateBoxShadow);
spreadRadius.addEventListener("input", updateBoxShadow);
color.addEventListener("input", updateBoxShadow);
copyCodeBtn.addEventListener("click", copyCodeToClipboard);
resetBtn.addEventListener("click", resetControls);
