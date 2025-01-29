// Desafio 2) Número na sequência de Fibonacci

function verificaFibonacci(numero) {
  let a = 0,
    b = 1,
    temp;

  while (b < numero) {
    temp = a + b;
    a = b;
    b = temp;
  }

  if (b === numero || numero === 0) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numero} NÃO pertence à sequência de Fibonacci.`);
  }
}

let numeroTeste = 21;
verificaFibonacci(numeroTeste);

// Desafio 4) Percentual de faturamento

const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const totalFaturamento = Object.values(faturamento).reduce(
  (acc, valor) => acc + valor,
  0
);

for (let estado in faturamento) {
  const percentual = (faturamento[estado] / totalFaturamento) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

// Desafio 5) Inverter os caracteres de uma string

function inverterString(str) {
  let stringInvertida = "";

  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }

  return stringInvertida;
}

let minhaString = "Desafio JavaScript";
let resultado = inverterString(minhaString);

console.log(resultado);
