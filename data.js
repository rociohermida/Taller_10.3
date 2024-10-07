window.onload = function() {
    // Recuperar el dato almacenado en localStorage
    const storedData = localStorage.getItem('storedData');

    // Mostrar el dato en el elemento correspondiente
    const dataElement = document.getElementById('data');
    if (storedData) {
        dataElement.textContent = storedData;
    } else {
        dataElement.textContent = 'No hay datos almacenados.';
    }
};