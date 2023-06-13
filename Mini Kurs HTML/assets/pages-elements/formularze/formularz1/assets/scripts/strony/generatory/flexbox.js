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

function generateCode() {
  const form = document.getElementById("flexbox-form");
  const containerDirection = form.elements["flex-direction"].value;
  const justifyContent = form.elements["justify-content"].value;
  const alignItems = form.elements["align-items"].value;
  const flexWrap = form.elements["flex-wrap"].checked ? "wrap" : "nowrap";
  const alignContent = form.elements["align-content"].value;
  const code = `display: flex;\nflex-direction: ${containerDirection};\njustify-content: ${justifyContent};\nalign-items: ${alignItems};\nflex-wrap: ${flexWrap};\nalign-content: ${alignContent};`;
  document.getElementById("code-area").value = code;
}

function resetForm() {
  document.getElementById("flexbox-form").reset();
  document.getElementById("code-area").value = "";
}