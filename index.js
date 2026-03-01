// index.js
// node index.js 2 * 0 
const [, , operador, a, b] = process.argv;

const n1 = Number(a);
const n2 = Number(b);

console.log(operador)

switch (operador) {
  case '+':
    console.log(n1 + n2);
  case '-':
    console.log(n1 + n2);
  case '*':
    console.log(n1 + n2);
  case '/':
    console.log(n1 / n2);
  case '%':
    console.log(n1 + n2);
}
