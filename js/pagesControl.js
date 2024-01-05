function openPromociones() {
  var carrusel = document.getElementById("carrusel");
  var cards = document.getElementById("cards");
  var methodPayment = document.getElementById("payment");
  var pedidos = document.getElementById("pedidos");


  if (carrusel && cards && methodPayment) {
    carrusel.style.display = "none";
    cards.style.display = "none";
    methodPayment.style.display = "none";
    pedidos.style.display = "none";	
  }

  var promociones = document.getElementById("promociones");
  if (promociones) {
    promociones.style.display = "block";
  }
}

function closePromociones() {
  var carrusel = document.getElementById("carrusel");
  var cards = document.getElementById("cards");
  var methodPayment = document.getElementById("payment");
  var pedidos = document.getElementById("pedidos");

  if (carrusel && cards && methodPayment) {
    carrusel.style.display = "block";
    cards.style.display = "block";
    methodPayment.style.display = "none";
    pedidos.style.display = "none";
  }

  var promociones = document.getElementById("promociones");
  if (promociones) {
    promociones.style.display = "none";
  }
}

function openPedidos() {
  var openPedidos = document.getElementById("pedidos");
  var carrusel = document.getElementById("carrusel");
  var cards = document.getElementById("cards");
  var methodPayment = document.getElementById("payment");
  var promociones = document.getElementById("promociones");

  if (carrusel && cards && methodPayment) {
    carrusel.style.display = "none";
    cards.style.display = "none";
    methodPayment.style.display = "none";
    promociones.style.display = "none";
  }

  if (openPedidos) {
    openPedidos.style.display = "block";
  }
}

function openPayment(){
  var openPayment = document.getElementById("payment");
  var carrusel = document.getElementById("carrusel");
  var cards = document.getElementById("cards");
  var promociones = document.getElementById("promociones");
  var pedidos = document.getElementById("pedidos");

  if (carrusel && cards && promociones) {
    carrusel.style.display = "none";
    cards.style.display = "none";
    promociones.style.display = "none";
    pedidos.style.display = "none";
  }

  if (openPayment) {
    openPayment.style.display = "block";
  }
}
