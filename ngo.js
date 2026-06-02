<<<<<<< HEAD
// JOIN BUTTON
function joinMessage() {
  alert("Thank you for your interest in joining Queens Of Change Foundation!");
}

// DONATE BUTTON
function donateMessage() {
  alert("Thank you for supporting our mission!");
}

// VOLUNTEER BUTTON
function volunteerMessage() {
  alert("Volunteer registration coming soon!");
}

// DARK MODE TOGGLE
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// CARD SCROLL ANIMATION
window.addEventListener("scroll", function () {

  let cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {

    let position = card.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      card.classList.add("show");
    }

  });

});
=======
// JOIN BUTTON
function joinMessage() {
  alert("Thank you for your interest in joining Queens Of Change Foundation!");
}

// DONATE BUTTON
function donateMessage() {
  alert("Thank you for supporting our mission!");
}

// VOLUNTEER BUTTON
function volunteerMessage() {
  alert("Volunteer registration coming soon!");
}

// DARK MODE TOGGLE
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// CARD SCROLL ANIMATION
window.addEventListener("scroll", function () {

  let cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {

    let position = card.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      card.classList.add("show");
    }

  });

});
>>>>>>> 2a10cc5b0d0bf67922f79a7f07e159a77b087349
