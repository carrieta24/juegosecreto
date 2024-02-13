let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; 
let numeroMaximo = 10;

let parrafo = document.querySelector('p');
parrafo.innerHTML = `Indica un número del 1 al ${numeroMaximo}`;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto)); 
    console.log(numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++; 
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p','Ya se sortearon todos los números posibles');
    } else {
        //Validamos si el número generado ya está en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return (numeroGenerado);
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p','Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}

function reiniciarJuego() {
    //limpia caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Reinicializar número de intentos
    condicionesIniciales();
    //deshabilitar botón NuevoJuego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();