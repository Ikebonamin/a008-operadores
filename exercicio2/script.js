"strict";

let a = console.log(prompt("Digite o primeiro número"));
let b = console.log(prompt("Digite o segundo número"));

let um = a > b;
let dois = b === a;
let tres = a % b === 0;
let quatro = b % a === 0;

console.log(tres, quatro);
console.log(um, dois, tres, quatro);
