function cargarComponente(url, placeholderId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(placeholderId).innerHTML = data;
    })
    .catch((error) => {
      console.error(`Error al cargar ${url}:`, error);
      document.getElementById(placeholderId).innerHTML = "Error al cargar el componente.";
    });
}

document.addEventListener("DOMContentLoaded", () => {
  cargarComponente("pages/nav-bar.html", "navbar-placeholder");
  cargarComponente("pages/content.html", "content-placeholder");
  cargarComponente("pages/footer.html", "footer-placeholder");
  cargarComponente("pages/components/cards.html", "cards-placeholder");
  cargarComponente("pages/components/carrusel.html", "carrusel-placeholder");
  cargarComponente("pages/components/promociones.html", "promociones-placeholder");
  cargarComponente("pages/components/methodPayment.html", "methodPayment-placeholder");
  cargarComponente("pages/components/pedidos.html", "pedidos-placeholder");

  cargarProductos();
  actualizarCategorias();
});
