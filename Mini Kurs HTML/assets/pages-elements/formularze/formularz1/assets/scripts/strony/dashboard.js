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
