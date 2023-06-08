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

const inputText = document.getElementById("input-text");
const textShadow = document.getElementById("text-shadow");
const copyButton = document.getElementById("copy-button");
const resetButton = document.getElementById("reset-button");
const cssCode = document.getElementById("css-code");
const hShadowInput = document.getElementById("h-shadow");
const vShadowInput = document.getElementById("v-shadow");
const blurInput = document.getElementById("blur");
const colorInput = document.getElementById("color");

inputText.addEventListener("input", function () {
  textShadow.textContent = inputText.value;
  generateCssCode();
});

hShadowInput.addEventListener("input", function () {
  generateCssCode();
});

vShadowInput.addEventListener("input", function () {
  generateCssCode();
});

blurInput.addEventListener("input", function () {
  generateCssCode();
});

colorInput.addEventListener("input", function () {
  generateCssCode();
});

copyButton.addEventListener("click", function () {
  cssCode.select();
  document.execCommand("copy");
});

resetButton.addEventListener("click", function () {
  inputText.value = "";
  textShadow.textContent = "Tutaj pojawi się twój tekst";
  generateCssCode();
});

function generateCssCode() {
  const hShadow = hShadowInput.value;
  const vShadow = vShadowInput.value;
  const blur = blurInput.value;
  const color = colorInput.value;

  const textShadowValue = `${hShadow}px ${vShadow}px ${blur}px ${color}`;

  textShadow.style.textShadow = textShadowValue;

  const cssCodeValue = `text-shadow: ${textShadowValue};`;

  cssCode.value = cssCodeValue;
}

generateCssCode();
