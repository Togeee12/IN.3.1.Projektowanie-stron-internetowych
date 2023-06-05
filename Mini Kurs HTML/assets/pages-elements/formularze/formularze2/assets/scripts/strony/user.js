window.addEventListener("load", () => {
  const localDatabase = JSON.parse(localStorage.getItem("users"));
  const loggedEmail = localStorage.getItem("logged");

  if (!loggedEmail) {
    window.location.replace("../../index.html");
  }

  const loggedUser = localDatabase[loggedEmail].User || "brak danych";
  const loggedUserNick = localDatabase[loggedEmail].Username || "brak danych";
  const loggedBio = localDatabase[loggedEmail].Bio || "brak danych";
  const loggedAddress = localDatabase[loggedEmail].Ulica || "brak danych";
  const loggedGender = localDatabase[loggedEmail].Gender || "brak danych";
  const loggedZipCode = localDatabase[loggedEmail].Zipcode || "brak danych";
  const loggedCity = localDatabase[loggedEmail].City || "brak danych";
  const loggedPhone = localDatabase[loggedEmail].Phone || "brak danych";
  const registerPassword = localDatabase[loggedEmail].Pass;
  document.querySelector("#username").value = loggedUserNick;
  document.querySelector("#username").value = loggedUserNick;
  document.querySelector("#title").value = loggedUser;
  // document.querySelector("#bio").value = loggedBio;
  document.querySelector("#street").value = loggedAddress;
  document.querySelector("#gender").value = loggedGender;
  document.querySelector("#zipcode").value = loggedZipCode;
  document.querySelector("#city").value = loggedCity;
  document.querySelector("#country").value = "Poland";
  document.querySelector("#phone").value = loggedPhone;

  // Zmiana danych po naciśnięciu przycisku potwierdź
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const updatedUserData = {
      User: loggedUser,
      Username: document.querySelector("#username").value,
      Pass: registerPassword,
      // Bio: document.querySelector("#bio").value,
      Ulica: document.querySelector("#street").value,
      Gender: document.querySelector("#gender").value,
      Zipcode: document.querySelector("#zipcode").value,
      City: document.querySelector("#city").value,
      Phone: document.querySelector("#phone").value,
    };
    localDatabase[loggedEmail] = updatedUserData;
    localStorage.setItem("users", JSON.stringify(localDatabase));
    alert("Dane zostały zaktualizowane!");
  });
});

// Menu
$(document).on("click", ".js-menu_toggle.closed", function (e) {
  e.preventDefault();
  $(".list_load, .list_item").stop();
  $(this).removeClass("closed").addClass("opened");

  $(".side_menu").css({ left: "0px" });

  var count = $(".list_item").length;
  $(".list_load").slideDown(count * 0.6 * 100);
  $(".list_item").each(function (i) {
    var thisLI = $(this);
    timeOut = 100 * i;
    setTimeout(function () {
      thisLI.css({
        opacity: "1",
        "margin-left": "0",
      });
    }, 100 * i);
  });
});

$(document).on("click", ".js-menu_toggle.opened", function (e) {
  e.preventDefault();
  $(".list_load, .list_item").stop();
  $(this).removeClass("opened").addClass("closed");

  $(".side_menu").css({ left: "-250px" });

  var count = $(".list_item").length;
  $(".list_item").css({
    opacity: "0",
    "margin-left": "-20px",
  });
  $(".list_load").slideUp(300);
});
