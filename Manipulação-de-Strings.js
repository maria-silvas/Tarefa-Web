const nomeCompleto = prompt("Digite seu nome completo: ");
const partesNome = nomeCompleto.split(" ");

const primeiroNome = partesNome[0];
const sobrenome = partesNome.slice(1).join(" ");

console.log("Primeiro nome:", primeiroNome);
console.log("Sobrenome:", sobrenome);
