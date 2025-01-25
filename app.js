//Variables (se utiliza para comentar de que trata el codigo)
let numeroMaximo = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraIntento = "intento"; en combinacion con linea 36, se suplanta por ternarios en linea 21
let maximosIntentos = 3;

console.log(`Numero secreto: ${numeroSecreto}`);

/*
Este codigo realiza la comparacion (se utiliza para comentar bloque de codigo)
*/

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(
    prompt(`Me indicas un numero entre 1 y ${numeroMaximo} por favor:`)
  ); //parseInt() conviert el string en typeof numero entero.

  if (numeroUsuario == numeroSecreto) {
    // Acertamos, fue veradera la condición
    alert(
      //template string con comillas invertidas para agregar variables
      `Acertaste, el número es ${numeroUsuario}. Lo lograste en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      }.`
    );
  } // la condición no se cumplio
  else {
    //alert("Lo siento, no acertaste el número");
    // Condicional anidado
    if (numeroUsuario > numeroSecreto) {
      alert("El número secreto es menor");
    } else {
      alert("El número secreto es mayor");
    }
    //Incrementamos el contador cuando no acierta
    //intentos = intentos + 1;
    //intentos += 1;
    intentos++;
    //palabraIntento = "intentos";

    //Condicion para salir del bucle!!
    if (intentos > maximosIntentos) {
      alert(`llegaste al número máximo de ${maximosIntentos} intentos`);
      break;
    }
  }
}


