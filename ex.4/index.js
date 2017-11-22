const produto = {
  nome: 'Caneta Bic Preta',
  preco: 1.90,
  desconto: 0.05
};

// spread irá receber cada um dos atributos e adiciona em um novo
// obj, então por isso o nome da função é clonar
function clone(obj){
  return { ...obj};
};

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Bic Vermelha';

console.log(produto, novoProduto);