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

const gridViewBtn = document.getElementById("grid-view-btn");
const listViewBtn = document.getElementById("list-view-btn");
const panelGridView = document.querySelector(".panel-grid-view");
const panelListView = document.querySelector(".panel-list-view");

gridViewBtn.addEventListener("click", () => {
  gridViewBtn.classList.add("active");
  listViewBtn.classList.remove("active");
  panelGridView.style.display = "grid";
  panelListView.style.display = "none";
});

listViewBtn.addEventListener("click", () => {
  gridViewBtn.classList.remove("active");
  listViewBtn.classList.add("active");
  panelGridView.style.display = "none";
  panelListView.style.display = "block";
});
