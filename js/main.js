let productos = [];

let productos2 = [];
let productos3=[];
fetch("html/nav-bar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
  })
  .catch((error) =>
    console.error("Error al cargar la barra de navegación:", error)
  );

fetch("html/content.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("content-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error al cargar el content:", error));

fetch("html/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  })
  .catch((error) => console.error("Error al cargar el footer:", error));


document.addEventListener('DOMContentLoaded', () => {
  cargarProductos();
  actualizarCategorias();
});
