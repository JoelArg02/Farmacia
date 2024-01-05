function openPromociones() {
  // Ocultar carrusel y cards
  var carrusel = document.getElementById("carrusel");
  var cards = document.getElementById("cards");

  if (carrusel && cards) {
    carrusel.style.display = "none";
    cards.style.display = "none";
  }

  // Mostrar el elemento promociones
  var promociones = document.getElementById("promociones");
  if (promociones) {
    promociones.style.display = "block"; // o "inline" o cualquier otro valor adecuado
  }

  // Puedes agregar tu código adicional para las promociones aquí
  console.log(
    "La función openPromociones se ha llamado y ha ocultado los elementos carrusel y cards, y mostrado el elemento promociones."
  );
}

function closePromociones() {
  // Mostrar carrusel y cards
  var carrusel = document.getElementById("carrusel");
  var cards = document.getElementById("cards");

  if (carrusel && cards) {
    carrusel.style.display = "block"; // o el valor original que tenían
    cards.style.display = "block"; // o el valor original que tenían
  }

  // Ocultar el elemento promociones
  var promociones = document.getElementById("promociones");
  if (promociones) {
    promociones.style.display = "none";
  }

  // Puedes agregar cualquier código adicional necesario aquí
  console.log("La función closePromociones se ha llamado y ha revertido los cambios realizados por openPromociones.");
}
