let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let maximosIntentos = 3;

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(numeroUsuario);
  console.log(numeroSecreto);

  if (numeroUsuario == numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste! Lo lograste en ${intentos} ${
        intentos == 1 ? "intento" : "intentos"
      }.`
    );
  } else {
    //El usuario no acertó.
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
    if (intentos > maximosIntentos) {
      asignarTextoElemento(
        "p",
        `llegaste al número máximo de ${maximosIntentos} intentos`
      );
    }
  }
  return;
};

//Limpio Input
function limpiarCaja() {
  let valorCaja = document.querySelector('#valorUsuario');
  valorCaja.value = '';
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * numeroMaximo) + 1;
};

function asignarTextoElemento(elemento, texto) {
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
};

asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", `Indicame un numero entre 1 y ${numeroMaximo}`);
