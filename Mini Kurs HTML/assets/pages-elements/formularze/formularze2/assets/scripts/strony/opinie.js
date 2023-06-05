window.addEventListener("load", () => {
  const localDatabase = JSON.parse(localStorage.getItem("users"));
  const loggedEmail = localStorage.getItem("logged");

  if (!loggedEmail) {
    window.location.replace("../../index.html");
  }
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

// Opinie o produkcie
$(document).ready(function () {
  // Pobierz opinie z local storage
  var reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  // Funkcja do sprawdzenia, czy wszystkie pola są wypełnione
  function checkForm() {
    var name = $("#name").val();
    var rating = $("#rating").val();
    var tour = $("#tour").val();
    var comment = $("#comment").val();
    if (name === "" || rating === "" || tour === "" || comment === "") {
      alert("Wszystkie pola są wymagane");
      return false;
    }
    return true;
  }

  // Wyświetlanie opinii
  function displayReviews() {
    var reviewList = $("#reviews");
    reviewList.empty();
    reviews.forEach(function (review) {
      var reviewElement = $("<div class='review'></div>");
      var nameElement = $("<h3 class='review__name'></h3>").text(review.name);
      var ratingElement = $("<p class='review__rating'></p>").text(
        "Ocena: " + review.rating + "/5"
      );
      var tourElement = $("<p class='review__tour'></p>").text(
        "Wycieczka: " + review.tour
      );
      var commentElement = $("<p class='review__comment'></p>").text(
        review.comment
      );
      var deleteButton = $(
        "<button class='review__delete'>Usuń opinię</button>"
      );
      deleteButton.on("click", function () {
        reviews.splice(reviews.indexOf(review), 1);
        localStorage.setItem("reviews", JSON.stringify(reviews));
        displayReviews();
      });
      reviewElement.append(nameElement);
      reviewElement.append(ratingElement);
      reviewElement.append(tourElement);
      reviewElement.append(commentElement);
      reviewElement.append(deleteButton);
      reviewList.append(reviewElement);
    });
  }

  // Dodaj opinię
  $("form").on("submit", function (event) {
    event.preventDefault();
    if (!checkForm()) {
      return;
    }
    var review = {
      name: $("#name").val(),
      rating: $("#rating").val(),
      tour: $("#tour").val(),
      comment: $("#comment").val(),
      date: new Date().toISOString(),
    };
    reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    displayReviews();
    $("#name").val("");
    $("#rating").val("");
    $("#tour").val("");
    $("#comment").val("");
  });

  $("form").on("keydown", function (event) {
    if (event.which === 13) {
      addReview(event);
    }
  });
  // Wyświetl opinie po załadowaniu strony
  displayReviews();
});
