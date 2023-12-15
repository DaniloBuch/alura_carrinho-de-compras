let totalGeral = 0;
let campoTotal = document.getElementById('valor-total');

limpar ();

function adicionar () {

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario =  produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade*valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade} x</span> ${nomeProduto} <span class="texto-azul"> R$ ${preco}</span>
  </section>`;
    totalGeral = totalGeral + preco;
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
};



function limpar () {
    let campoTotal = document.getElementById('valor-total');
    document.getElementById('lista-produtos').innerHTML = ''
    campoTotal.innerHTML = '';
    totalGeral = 0;
};