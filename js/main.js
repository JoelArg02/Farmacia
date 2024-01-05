fetch("pages/nav-bar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
  })
  .catch((error) =>
    console.error("Error al cargar la barra de navegación:", error)
  );

fetch("pages/content.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("content-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error al cargar el content:", error));

fetch("pages/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error al cargar el footer:", error));

fetch("pages/components/cards.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("cards-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error al cargar los cards:", error));

fetch("pages/components/carrusel.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("carrusel-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error al cargar el carousel:", error));

  fetch("pages/components/promociones.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("promociones-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error al cargar las promociones:", error));

  fetch("pages/components/metodo_pago.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("pedidos-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error al cargar los pedidos:", error));

document.addEventListener("DOMContentLoaded", () => {
  // Cargar la página inicial cuando se inicie la aplicación
  cargarProductos();
  actualizarCategorias();

});