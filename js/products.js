let productos = []; // Declaración global de la variable productos

function cargarProductos() {
  Promise.all([
      fetch("data/medicina.json").then(response => response.json()),
      fetch("data/mascotas.json").then(response => response.json()),
      fetch("data/cosmeticos.json").then(response => response.json()),
  ])
  .then(([medicinaData, mascotasData, cosmeticaData]) => {
      // Agrega el campo 'tipo' a cada producto
      const medicinaConTipo = medicinaData.map(producto => ({ ...producto, tipo: 'medicina' }));
      const mascotasConTipo = mascotasData.map(producto => ({ ...producto, tipo: 'veterinaria' }));
      const cosmeticosConTipo = cosmeticaData.map(producto => ({ ...producto, tipo: 'cosmetico' }));

      productos = [...medicinaConTipo, ...mascotasConTipo, ...cosmeticosConTipo];
      cargarCategorias(); // Llamada a cargarCategorias después de cargar los productos
  })
  .catch(error => console.error("Error al cargar productos:", error));
}


function cargarCategorias() {
  const categorias = new Set();
  productos.forEach((producto) => categorias.add(producto.categoria));

  actualizarCategorias(categorias); // Asegúrate de que esta función maneje correctamente las categorías
}

function actualizarCategorias() {
  const categoriasMedicina = new Set();
  const categoriasVeterinaria = new Set();
  const categoriasCosmeticos = new Set();

  productos.forEach((producto) => {
    switch (producto.tipo) {
      case "medicina":
        categoriasMedicina.add(producto.categoria);
        break;
      case "veterinaria":
        categoriasVeterinaria.add(producto.categoria);
        break;
      case "cosmetico":
        categoriasCosmeticos.add(producto.categoria);
        break;
    }
  });

  actualizarMenuDesplegable("menu-medicina", categoriasMedicina);
  actualizarMenuDesplegable("menu-veterinaria", categoriasVeterinaria);
  actualizarMenuDesplegable("menu-cosmeticos", categoriasCosmeticos);
}

function actualizarMenuDesplegable(idMenu, categorias) {
  const menuCategorias = document.querySelector(`#${idMenu}`);
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


cargarProductos();