const modalAlimento = new bootstrap.Modal(document.getElementById('modalAlimento'));
const on = (element, event, selector, handler) => {
  element.addEventListener(event, e => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

on(document, 'click', '.btnEditar', e => {
  const fila = e.target.parentNode.parentNode;
  const id = fila.getAttribute("id"); // Obtener el valor del atributo "data-id"
  const numPila = fila.children[1].innerHTML;
  const tipoAlimento = fila.children[2].innerHTML;
  const cantidadAlimento = fila.children[3].innerHTML;
  const observacion = fila.children[5].innerHTML;

  numPila_editar.value = numPila;
  tipo_editar.value = tipoAlimento;
  cantidad_editar.value = cantidadAlimento;
  observacion_editar.value = observacion;

  modalAlimento.show();

  frmActualizarAlimento.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(`http://localhost:8082/API/Alimentacion/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authenticate': localStorage.getItem("authenticate"),
      },
      body: JSON.stringify({
        numPila: numPila_editar.value,
        tipoAlimento: tipo_editar.value,
        cantidadAlimento: cantidad_editar.value,
        observacion: observacion_editar.value,

      })
    })
      .then(response => response.json())
      .then(response => location.reload());

    modalAlimento.hide();
  });
});