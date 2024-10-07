document.getElementById('buttonText').addEventListener('click', function() {
    // Obtener el valor del input
    const inputText = document.getElementById('inputText').value;

    // Almacenar el valor en localStorage
    localStorage.setItem('storedData', inputText);

    // Redirigir a data.html
    window.location.href = 'data.html';
});