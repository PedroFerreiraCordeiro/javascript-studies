const livros = require('./listaLivros');

 menorValor.forEach((arrProdutos, posicaoInicial) =>{
    let maisBarato = posicaoInicial;

    
    if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
        maisBarato = atual
    }
    
    return maisBarato;
})

module.exports = menorValor;