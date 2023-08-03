const modalConcentrado = new bootstrap.Modal(document.getElementById('modalConcentrado'));
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
    const proveedorConcentrado = fila.children[1].innerHTML;
    const marcaConcentrado = fila.children[2].innerHTML;
    const tipoConcentrado = fila.children[3].innerHTML;
    const vencimientoConcentrado = fila.children[4].innerHTML;
    const proteinaConcentrado = fila.children[5].innerHTML;
    const cantidadConcentrado = fila.children[6].innerHTML;
    const precioConcentrado = fila.children[7].innerHTML;
    marca_editar.value = marcaConcentrado;
    tipo_editar.value = tipoConcentrado;
    cantidad_editar.value = cantidadConcentrado;
    provider_editar.value = proveedorConcentrado;
    precio_editar.value = precioConcentrado;
    proteina_editar.value = proteinaConcentrado;
    expirationDate_editar.value = vencimientoConcentrado;
    modalConcentrado.show();

    frmActualizarConcentrado.addEventListener('submit', (e) => {
        e.preventDefault();

        fetch(`http://localhost:8082/API/concentrado/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authenticate': localStorage.getItem("authenticate"),
            },
            body: JSON.stringify({
                marcaConcentrado: marca_editar.value,
                tipoConcentrado: tipo_editar.value,
                cantidadConcentrado: cantidad_editar.value,
                provideer: provider_editar.value,
                precio: precio_editar.value,
                cantProteina: proteina_editar.value,
                fechaVencimiento: expirationDate_editar.value
            })
        })
            .then(response => response.json())
            .then(response => location.reload());

        modalConcentrado.hide();
    });
});
