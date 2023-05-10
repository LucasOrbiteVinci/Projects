let valorTotal = [0, 0];
let valorProduto = [49.99, 29.99];
let qtd = [0, 0];

function adicionarItem(item) {
  let quantidadeProduto = document.getElementById('quantidadeProduto' + item);
  let total = document.getElementById('total' + item);
  qtd[item] += 1;
  valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
  quantidadeProduto.innerHTML = qtd[item];
  total.innerHTML = valorTotal[item].toFixed(2);
  valorCompra();
}

function removerItem(item) {
  if (qtd[item] > 0) {
    qtd[item] -= 1;
    let quantidadeProduto = document.getElementById('quantidadeProduto' + item);
    let total = document.getElementById('total' + item);
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    quantidadeProduto.innerHTML = qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra();
  }
}

function valorCompra() {
  let valorTotalCompra = document.getElementById('valorTotalCompra');
  let valor = 0;

  for (let i = 0; i < valorTotal.length; i++) {
    valor += valorTotal[i];
  }

  valorTotalCompra.innerHTML = valor.toFixed(2);
}
