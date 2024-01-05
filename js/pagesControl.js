const ELEMENT_IDS = {
  carrusel: "carrusel",
  cards: "cards",
  payment: "payment",
  pedidos: "pedidos",
  promociones: "promociones"
};

function setDisplay(idsToShow, displayStyle) {
  Object.values(ELEMENT_IDS).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = idsToShow.includes(id) ? displayStyle : "none";
    }
  });
}

function openPromociones() {
  setDisplay([ELEMENT_IDS.promociones], "block");
}

function closePromociones() {
  setDisplay([ELEMENT_IDS.carrusel, ELEMENT_IDS.cards], "block");
}

function openPedidos() {
  setDisplay([ELEMENT_IDS.pedidos], "block");
}

function openPayment() {
  setDisplay([ELEMENT_IDS.payment], "block");
}
