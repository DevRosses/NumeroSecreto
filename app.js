let numeroMaximo = 10;
let numeroSecreto = 0;
let intentos = 0;
let maximosIntentos = 3;

function verificarIntento() {
  //Tomo valor del input.
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  //veo el valor de input en consola.
  console.log(numeroUsuario);
  console.log(numeroSecreto);

  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste! Lo lograste en ${intentos} ${
        intentos == 1 ? "intento" : "intentos"
      }.`
    );
    //Quita atributo(disabled) al button nuevo juego.
    document.getElementById("reiniciar").removeAttribute("disabled");
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
}

//Limpio Input
function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * numeroMaximo) + 1;
}

function asignarTextoElemento(elemento, texto) {
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indicame un numero entre 1 y ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled",true);
}

condicionesIniciales();
