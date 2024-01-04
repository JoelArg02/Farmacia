function cargarProductos() {
  return fetch("data/products.json")
      .then((response) => response.json())
      .then((data) => {
          productos = data;
          actualizarCategorias(); 
      })
      .catch((error) => console.error("Error al cargar productos:", error));
}

function actualizarCategorias() {
  const categorias = new Set();
  productos.forEach(producto => categorias.add(producto.categoria));

  const menuCategorias = document.querySelector('.dropdown-menu');
  menuCategorias.innerHTML = '';

  categorias.forEach(categoria => {
      const itemCategoria = document.createElement('li');
      const enlaceCategoria = document.createElement('a');
      enlaceCategoria.className = 'dropdown-item';
      enlaceCategoria.href = '#';
      enlaceCategoria.textContent = categoria;
      itemCategoria.appendChild(enlaceCategoria);
      menuCategorias.appendChild(itemCategoria);
  });
}

function mostrarProductos(productos) {
  const contenedorProductos = document.getElementById("productos");
  contenedorProductos.innerHTML = "";

  productos.forEach((producto) => {
    const htmlProducto = crearHTMLProducto(producto);
    contenedorProductos.innerHTML += htmlProducto;
  });
}

function crearHTMLProducto(producto) {
  return `
          <div class="card">
              <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
              <div class="card-body">
                  <h5 class="card-title">${producto.nombre}</h5>
                  <p class="card-text">${producto.descripcion}</p>
                  <button type="button" class="btn btn-primary" onclick="abrirDetalleProducto(${producto.id})">Adquirir</button>
              </div>
          </div>
      `;
}

function filtrarProductos() {
  console.log("Buscando");
  const textoBusqueda = document
    .getElementById("searchBox")
    .value.toLowerCase();

  if (productos.length === 0) {
    cargarProductos().then(() => {
      filtrarYMostrar(textoBusqueda);
    });
  } else {
    filtrarYMostrar(textoBusqueda);
  }
}

function filtrarYMostrar(textoBusqueda) {
  if (textoBusqueda.trim() === "") {
    const contenedorProductos = document.getElementById("productos");
    contenedorProductos.innerHTML = "";
    return;
  }

  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(textoBusqueda) ||
      producto.descripcion.toLowerCase().includes(textoBusqueda)
  );
  mostrarProductos(productosFiltrados);
}

document
  .getElementById("form-busqueda")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    buscarProductos();
  });

function buscarProductos() {
  const textoBusqueda = document
    .getElementById("searchBox")
    .value.toLowerCase();
  const resultadosBusqueda = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(textoBusqueda)
  );
  mostrarResultadosBusqueda(resultadosBusqueda);
}

function mostrarResultadosBusqueda(resultados) {
  const contenedorResultados = document.getElementById("resultados-busqueda");
  contenedorResultados.innerHTML = "";

  resultados.forEach((producto) => {
    contenedorResultados.innerHTML += `
              <div class="resultado-busqueda">
                  <img src="${producto.imagen}" alt="${producto.nombre}" class="img-resultado">
                  <span>${producto.nombre}</span>
              </div>
          `;
  });
}

function abrirDetalleProducto(idProducto) {
  const producto = productos.find((p) => p.id === idProducto);
  if (!producto) return;

  document.getElementById("popupTitulo").innerText = producto.nombre;
  document.getElementById("popupImagen").src = producto.imagen;
  document.getElementById("popupDescripcion").innerText = producto.descripcion;

  document.getElementById("popupProducto").style.display = "flex";
}

function cerrarPopup() {
  document.getElementById("popupProducto").style.display = "none";
}

function cargarCategorias() {
  const categorias = new Set();
  productos.forEach((producto) => categorias.add(producto.categoria));

  actualizarMenuCategorias(categorias);
}

function actualizarMenuCategorias(categorias) {
  const menuCategorias = document.querySelector(".dropdown-menu");
  menuCategorias.innerHTML = ""; 

  categorias.forEach((categoria) => {
    const itemCategoria = document.createElement("li");
    const enlaceCategoria = document.createElement("a");
    enlaceCategoria.className = "dropdown-item";
    enlaceCategoria.href = "#";
    enlaceCategoria.textContent = categoria;

    itemCategoria.appendChild(enlaceCategoria);
    menuCategorias.appendChild(itemCategoria);
  });
}

cargarProductos();
