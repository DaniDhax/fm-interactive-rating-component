const ratingState = document.querySelector(".state-rating");
const thankyouState = document.querySelector(".state-thankyou");
const ratingButton = document.querySelector(".button-rating");
const submitButton = document.querySelector(".button-submit");
const spanValor = document.getElementById("valor");

let valorbtn;

const ratingButtons = document.querySelectorAll(".button-rating");

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    //Almacenar el valor del botón pulsado en una variable
    valorbtn = button.textContent;

    // Restaurar el color de fondo original para todos los botones
    ratingButtons.forEach((btn) => {
      btn.style.backgroundColor = "var(--medium-grey)";
      btn.style.color = "var(--light-grey)"
    });

    // Cambiar el color de fondo del botón clickeado
    button.style.backgroundColor = "var(--light-grey)";
    button.style.color = "white";
  });

  // Mantener el estilo de hover original
  button.addEventListener('mouseover', () => {
    if (button.style.backgroundColor !== 'var(--light-grey)') {
      button.style.backgroundColor = 'var(--orange)';
      button.style.color = 'var(--white)';
    }
  });
  
  button.addEventListener('mouseout', () => {
    if (button.style.backgroundColor !== 'var(--light-grey)') {
      button.style.backgroundColor = 'var(--medium-grey)';
      button.style.color = 'var(--light-grey)';
    }
  });

});

submitButton.addEventListener("click", () => {
  ratingState.style.display = "none";
  thankyouState.style.display = "block";
  spanValor.textContent = valorbtn;
});
