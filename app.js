let amigos = [];
let sorteoRealizado = false;

//Funcion para agregar un amigo
function agregarAmigo() {
    if (sorteoRealizado) {
        alert('El sorteo ya se realizó. Reinicia el juego para agregar más amigos.');
        return;
    }
    const campoNombre = document.getElementById('amigo');
    const nombre = campoNombre.value.trim();
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido agregado. Por favor, ingresa uno diferente.');
        campoNombre.value = '';
        campoNombre.focus();
        return;
    }
    amigos.push(nombre);
    actualizarLista();
    campoNombre.value = '';
    campoNombre.focus();
}

//Función de actualizar lista
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        lista.appendChild(elementoLista);
    }
}

//Función para sortear el amigo
function sortearAmigo() {
    if (sorteoRealizado) {
        alert('El sorteo ya ha finalizado. Para volver a jugar, reinicia el juego.');
        return;
    }
    if (amigos.length < 2) {
        alert('Debes agregar al menos dos amigos para poder realizar el sorteo.');
        return;
    }
    const totalAmigos = amigos.length;
    const indiceAleatorio = Math.floor(Math.random() * totalAmigos);
    const amigoSecreto = amigos[indiceAleatorio];
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li> ${amigoSecreto}</li>`;
    sorteoRealizado = true;
    document.getElementById('amigo').disabled = true;
    document.getElementById('boton-agregar').disabled = true;
}

/**
    Función para reiniciar el juego.
 */
function reiniciarJuego() {
    amigos = [];
    sorteoRealizado = false;

    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    
    //Se habilitan de nuevo el campo de texto y el botón.
    document.getElementById('amigo').disabled = false;
    document.getElementById('boton-agregar').disabled = false;
    
    const campoNombre = document.getElementById('amigo');
    campoNombre.value = ''; 
    campoNombre.focus(); 
    
    //alert('¡Juego reiniciado! Ya puedes agregar nuevos amigos.');
}