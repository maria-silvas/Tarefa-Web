function calcularMedia(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3;
    return media.toFixed(2);
  }
  
  const nota1 = parseFloat(prompt("Insira a primeira nota: "));
  const nota2 = parseFloat(prompt("Insira a segunda nota: "));
  const nota3 = parseFloat(prompt("Insira a terceira nota: "));
  
  const mediaFinal = calcularMedia(nota1, nota2, nota3);
  console.log(`A média é: ${mediaFinal}`);
  