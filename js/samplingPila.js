const selectElement = document.getElementById('currentStack');

fetch('http://localhost:8082/API/Pila', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'authenticate': localStorage.getItem("authenticate"),
  }
})
  .then(response => response.json())
  .then(data => {
    const mortalidad = data.mantePila; // Ajusta la propiedad 'mortalidad' según la estructura de los datos

    mortalidad.forEach(muerte => {
      const option = document.createElement('option');
      option.value = muerte.numPila;
      option.textContent = muerte.numPila;
      selectElement.appendChild(option);
    });
  })
  .catch(error => {
    console.error('Error al obtener la mortalidad:', error);
  });

// Script momentaneo para pilas destino

  const selectElemento = document.getElementById('destinationStack');

  fetch('http://localhost:8082/API/Pila', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authenticate': localStorage.getItem("authenticate"),
    }
  })
    .then(response => response.json())
    .then(data => {
      const mortalidad = data.mantePila; // Ajusta la propiedad 'mortalidad' según la estructura de los datos
  
      mortalidad.forEach(muerte => {
        const option = document.createElement('option');
        option.value = muerte.numPila;
        option.textContent = muerte.numPila;
        selectElemento.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Error al obtener la mortalidad:', error);
    });