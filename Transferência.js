const contas = [
    {numero: 12345, saldo: 1000},
    {numero: 54321, saldo: 500},
    {numero: 98765, saldo: 2500},
];

// Função do Calaça
function transferir(origem, destino, valor) {
    // Verificar se a conta de origem existe, se existir verificar o saldo
    const contaOrigem = contas.find(c => c.numero === origem);
    if(!contaOrigem) {
        console.log('Conta de origem não existe');
        return;
    } else if (contaOrigem.saldo < valor) {
        console.log('Saldo insuficiente');
        return;
    }

    //Verica se a conta de destino existe
    const contaDestino = contas.find(c => c.numero === destino);
    if(!contaDestino) {
        console.log('conta de destino não existe.');
        return;
    }

    // Realizar Transferência
    contaOrigem.saldo -= valor;
    contaDestino.saldo += valor;

    console.log(`Transferência realizada com sucesso da conta ${contaOrigem.numero} para a conta destino ${contaDestino.numero}`);
    return;
}

// transferir(
//     54321,
//     98765,
//     70,
// );