const selectElement = document.getElementById('numPila');

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

  const selectElementEditar = document.getElementById('numPila_editar');

fetch('http://localhost:8082/API/Pila', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'authenticate': localStorage.getItem("authenticate"),
  }
})
  .then(response => response.json())
  .then(data => {
    const pilas = data.mantePila; // Ajusta la propiedad 'mantePila' según la estructura de los datos

    pilas.forEach(pila => {
      const option = document.createElement('option');
      option.value = pila.numPila;
      option.textContent = pila.numPila;
      selectElementEditar.appendChild(option);
    });
  })
  .catch(error => {
    console.error('Error al obtener las pilas:', error);
  });