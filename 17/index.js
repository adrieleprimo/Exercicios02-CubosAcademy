//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

if (valorPago!= valorDoProduto){
    let parcelasRestantes =Math.abs(300/100-10);
    let valor = (valorDoProduto/100-valorPago)/parcelasRestantes;
    console.log(`Restam ${parcelasRestantes} parcelas de R$${valor}`)
}