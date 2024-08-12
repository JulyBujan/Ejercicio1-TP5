let numero;

document.getElementById('iniciaJuego').addEventListener('click', function() {
    // Genera un número aleatorio entre 1 y 100
    numero = Math.floor(Math.random() * 100) + 1;
 
    
    // Muestra la sección del juego
    document.getElementById('juego').style.display = 'block';
});

document.getElementById('enviar').addEventListener('click', function() {
    const numeroIngresado = parseInt(document.getElementById('numeroIngresado').value);

    if (numeroIngresado === numero) {
        alert('Adivinaste el número mágico.');
      
    } else if (numeroIngresado > numero) {
        alert('El número ingresado es mayor que el número mágico. Probá otra vez.');
        
    } else {
        alert('El número ingresado es menor que el número mágico. Probá otra vez.');
    }
});