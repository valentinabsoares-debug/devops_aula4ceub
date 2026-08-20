function somar(a, b) {
 return a - b; // Erro de lógica proposital
}
// const x = 100; // Variável sem uso para forçar erro no ESLint
function subtrair(a, b) {
  return a - b;
}

module.exports = {
  somar,
  subtrair
};