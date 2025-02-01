let numeroMaximo = 10;
let numeroSecreto = 0;
let intentos = 0;
let maximosIntentos = 3;
let listaNumeroSorteados = [];


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

//Genera un numero aleatorio
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(`numero generado: ${numeroGenerado}`);
  console.log(listaNumeroSorteados);

  //si el numero generado esta incluido en la lista hacemos una operacion o sino otra.
  if (listaNumeroSorteados.includes(numeroGenerado)) {
    // en el caso que este en la lista se aplica la recursividad, vuelve a ejecutar la funcion a si misma.
    return generarNumeroSecreto();
  
  } else {
    //guardar numero generado para adicionalo a la lista y qu no vuelva a ser jugado
    listaNumeroSorteados.push(numeroGenerado);
    return numeroGenerado
}

}

//Asigna titulo a un elemento y a la vez un texto
function asignarTextoElemento(elemento, texto) {
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
}

// Establece las condiciones inciales necesarias
function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indicame un numero entre 1 y ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

// Reinicia las condiciones iniciales 
function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled",true);
}

condicionesIniciales();
