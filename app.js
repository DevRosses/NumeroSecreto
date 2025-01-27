let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let maximosIntentos = 3;

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  console.log(numeroUsuario);
  console.log(numeroSecreto);
  console.log(numeroSecreto == numeroUsuario);
  

  while (numeroUsuario != numeroSecreto) {

    if (numeroUsuario == numeroSecreto) {
      asignarTextoElemento(
        "p",
        `Acertaste, el número es ${numeroUsuario}. Lo lograste en ${intentos} ${
          intentos == 1 ? "vez" : "veces"
        }.`
      );
    } else {
      if (numeroUsuario > numeroSecreto) {
        asignarTextoElemento("p", "El número secreto es menor");
      } else {
        asignarTextoElemento("p", "El número secreto es mayor");
      }
      intentos++;
      if (intentos > maximosIntentos) {
        asignarTextoElemento(
          "p",
          `llegaste al número máximo de ${maximosIntentos} intentos`
        );

        break;
      }
    }
  }
  return;
}

function asignarTextoElemento(elemento, texto) {
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * numeroMaximo) + 1;
}

asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", `Indicame un numero entre 1 y ${numeroMaximo}`);
