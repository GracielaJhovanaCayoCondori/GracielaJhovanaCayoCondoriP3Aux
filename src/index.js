"use strict";
import "./style.css"
const buttonPoll = document.querySelector(".poll");

// SU CODIGO EMPIEZA DESDE AQUI
const poll = {
   question: "What is your favourite programming language?",
   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
   answers: new Array(4).fill(0),


// 1. Cree un método llamado 'registerNewAnswer' en el objeto 'poll'. El método hace 2
// cosas:
registrerNewAnswer() {
   
// 1.1. Muestre un prompt para que el usuario ingrese el número de la opción
// seleccionada. El mensaje debería verse así:
// ¿Cuál es tu lenguaje de programación favorito?
// 0: JavaScript
// 1: Python
// 2: Kotiln
// 3: C ++
// (Escriba el número de la opción que guste)
const pregunta = Number(
   prompt(
      `¿Cuál es tu lenguaje de programación favorito?\n${this.options.join("\n")}
      \n(Escriba el número de la opción que guste)`
   )
);
console.log(pregunta);

// 1.2. Según el número de entrada, actualice la propiedad del array ‘answers'. Por
// ejemplo, si la opción es 3, aumente el valor en la posición 3 del array en una
// unidad. Asegúrese de verificar si la entrada es un número y si el número tiene
// sentido (por ejemplo, la respuesta 52 no tendría sentido, ¿verdad?)
typeof pregunta === "number" && pregunta < this.answers.length && this.answers[pregunta]++;

// 4. Ejecute el método 'displayResults' al final de cada llamada al método
   // 'registerNewAnswer'.
   this.displayResults();  
   this.displayResults("string");


//console.log(this.answers);

},
// 3. Cree un método 'displayResults' que muestre los resultados de la encuesta. El
// método toma una cadena como entrada (llamada 'type'), que puede ser ‘string' o
// 'array'. Si el tipo es 'array', simplemente muestre el array de resultados tal como
// está, usando console.log(). Esta debería ser la opción por defecto. Si el tipo es
// 'string', muestre un mensaje de la siguiente forma: "Los resultados de la encuesta
// son 13, 2, 4, 1 respectivamente".
displayResults  (type = "array") {
   if(type === "array"){
      console.log(this.answers);

   }else if (type === "string") {
      console.log(`Los resultados de la encuesta son:  ${this.answers.join(", ")}`);
   }
},
};
//poll.registrerNewAnswer();
// 2. Llame a este método siempre que el usuario haga clic en el botón "Answer poll"
// (este elemento ya esta seleccionado en el archivo ‘script.js’ con el nombre de
// ‘buttonPoll’, por lo tanto ya no tiene que preocuparse por seleccionarlo,
// simplemente uselo ).
buttonPoll.addEventListener("click", poll.registrerNewAnswer.bind(poll));





// 5. Use el método 'displayResults' para mostrar las 2 matrices que se muestran al
// final. Haga la prueba tanto con la opción 'array' como ‘string’. No pongas los arrays
// en el objeto ‘poll’. Entonces, ¿cómo debería verse ‘this’ en este caso?   
poll.displayResults.call({answers: [5,2,3]}, "string");
poll.displayResults.call({answers: [1,5,3,9,6,1]}, "string");
poll.displayResults.call({answers: [1,5,3,9,6,1]}, "array");
