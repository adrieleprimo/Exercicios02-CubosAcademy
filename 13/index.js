//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
if(tipoDePagamento === "credito"){
    let valor = (valorDoProduto-(valorDoProduto*0.05))/100;
    console.log(`Valor a ser pago: R$${valor.toFixed(2)}`)
} else if(tipoDePagamento === "debito"){
    let valor = (valorDoProduto-(valorDoProduto*0.1))/100;
    console.log(`Valor a ser pago: R$${valor.toFixed(2)}`)
} else{
    let valor = (valorDoProduto-(valorDoProduto*0.03))/100;
    console.log(`Valor a ser pago: R$${valor.toFixed(2)}`)
}