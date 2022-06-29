const livros= require('./listaLivros');
const menorValor= require('./menorValor');

livros.forEach ((_, indice)=>{
let menor = menorValor(livros, indice)
console.log(menor);
let livroAtual = livros[indice];
console.log(livroAtual);
let livroMenorPreco = livros[menor];
console.log(livroMenorPreco);

livros[indice] = livroMenorPreco;
livros[menor] = livroAtual;
})

console.log(livros);