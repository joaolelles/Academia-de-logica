const mininoDeMoedas = (valor, moedas) => {
  // const order = moedas.sort((a,b) => {a - b})

  let newArr = [];

  for (let i = 0; i < moedas.length; i++) {
    while (valor >= moedas[i]) {
      valor -= moedas[i];
      newArr.push(moedas[i]);
    }
  }

  return newArr;

};

const valor = 67;
const moedas = [100, 50, 25, 10, 5, 1];
const resultado = mininoDeMoedas(valor, moedas);

console.log(resultado);
