/*
----FUNCIÓN ANÓNIMA AUTOEJECUTABLE---
(function () {
  alert("Bienvenido a la página web");
})();
*/

const ratingState = document.querySelector(".state-rating");
const thankyouState = document.querySelector(".state-thankyou");
const submitButton = document.querySelector(".button-submit");

submitButton.addEventListener("click", () => {
  ratingState.style.display = "none";
  thankyouState.style.display = "block"
});
