let temDinheiro = true;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;

let resultadoE = " Você vai no shopping ? ";
resultadoE += temDinheiro && estaEnsolarado;
 console.log(resultadoE); 

 let resultadoOU = "você vai no shopping ? ";
 resultadoOU += estaEnsolarado || carroEstaNaGaragem;
 console.log(resultadoOU);