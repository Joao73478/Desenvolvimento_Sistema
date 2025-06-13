const frutas =['maça', 'banana', 'uva'];
console.log(frutas[0]);

frutas[3] = 'abacaxi'; // adiciona no indice informado
frutas.push ('pera'); // adiciona por ultimo
//console.log(frutas);

frutas.pop(); // remove o ultimo dado

//              0   1   2   3   4
const numero = [10, 20, 30, 40, 50];
numero.splice(1,2)
console.log(numero);

numero[0] = 100;
console.log(numero.indexOf(50));
console.log(numero);
console.log(numero.includes(40));
console.log(numero.includes(10))
console.log(numero.join(' / '));

const valores = [15, 25, 35, 45];
console.log(numero.concat(valores));