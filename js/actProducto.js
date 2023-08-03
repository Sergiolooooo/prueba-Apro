const modalProducto = new bootstrap.Modal(document.getElementById('modalProducto'));
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e);
        }
    });
};

on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode;
    const inventory_id = fila.getAttribute("id"); // Obtener el valor del atributo "data-id"
    const product_id = fila.getAttribute("product_id");


    var fechaHoraInput = document.getElementById("date");
    var fechaHoraActual = new Date();
    fechaHoraActual.setHours(fechaHoraActual.getHours() - 6);

    const dateTb = fechaHoraActual.toISOString().slice(0, 16);
    const lastPriceTb = fila.children[0].innerHTML;
    const proveedorProductoTb = fila.children[2].innerHTML;
    const marcaProductoTb = fila.children[7].innerHTML;
    const cantidadProductoTb = fila.children[3].innerHTML;
    const precioActualTb = fila.children[1].innerHTML;
    const productoTb = fila.children[6].innerHTML;
    const unityTb = fila.children[8].innerHTML;
    const providerTb = fila.children[5].innerHTML;
    const stateTb = fila.children[11].innerHTML;
    lastPrice_editar.value = lastPriceTb;
    date_editar.value = dateTb;
    provider_editar.value = proveedorProductoTb;
    brandProduct_editar.value = marcaProductoTb;
    amount_editar.value = cantidadProductoTb;
    price_editar.value = precioActualTb;
    product_editar.value = productoTb;
    unity_editar.value = unityTb;
    provider_editar.value = providerTb;
    state_editar.value = stateTb;



    modalProducto.show();

    frmActualizarProducto.addEventListener('submit', (e) => {
        e.preventDefault();

        const productAmount = document.getElementById('amount_editar').value;
        const productDate = document.getElementById('date_editar').value;
        const prodctProvider = document.getElementById('provider_editar').value;
        const product = document.getElementById('product_editar').value;
        const productBrandProduct = document.getElementById('brandProduct_editar').value;
        const productUnity = document.getElementById('unity_editar').value;
        const actualPrice = document.getElementById('price_editar').value;
        const state = document.getElementById('state_editar').value;
        let lastPrice = document.getElementById('lastPrice_editar').value;

        //si cambia el precio actual, entonces guardamos el nuevo precio anterior
        if (actualPrice !== precioActualTb) {
            lastPrice = precioActualTb;
        }
        let averagePrice = ((parseInt(actualPrice) + parseInt(lastPrice)) / 2);
        console.log(averagePrice);

        var fechaHoraActual = new Date();
        fechaHoraActual.setHours(fechaHoraActual.getHours() - 6);



        fetch(`http://localhost:8082/API/products/${inventory_id}/${product_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authenticate': localStorage.getItem("authenticate"),
            },
            body: JSON.stringify({
                lastPrice: lastPrice,
                actualPrice: actualPrice,
                averagePrice: averagePrice,
                amount: productAmount,
                products: {
                    date: productDate,
                    dateLastUpdate: (fechaHoraActual.toISOString().slice(0, 16)),
                    provider: prodctProvider,
                    product: product,
                    brandProduct: productBrandProduct,
                    amountIncome: productAmount,
                    unity: productUnity,
                    price: actualPrice,
                    state: state,
                }
            })
        })
            .then(response => response.json())
            .then(response => {
                if (response.ok) {
                    alert(response.message);
                    location.reload()
                }

            });

        modalProducto.hide();
    });
});