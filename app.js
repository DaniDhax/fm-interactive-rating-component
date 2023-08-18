/*
----FUNCIÓN ANÓNIMA AUTOEJECUTABLE---
(function () {
  alert("Bienvenido a la página web");
})();
*/

const ratingState = document.querySelector(".state-rating");
const thankyouState = document.querySelector(".state-thankyou");
const ratingButton = document.querySelector(".button-rating");
const submitButton = document.querySelector(".button-submit");
const spanValor = document.getElementById("valor");

let valorBoton;

submitButton.addEventListener("click", () => {
  ratingState.style.display = "none";
  thankyouState.style.display = "block";
  spanValor.textContent = valorBoton;
});

const botones = document.querySelectorAll(".button-rating");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    valorBoton = boton.textContent;
  });
});
