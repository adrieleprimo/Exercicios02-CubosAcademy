const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if(idade < 12 || idade > 65){
    console.log("ACESSO NEGADO");
}else if(possuiPatologia === true){
    console.log("ACESSO NEGADO");
}else if(altura < 150){
    console.log("ACESSO NEGADO");
} else if (idade <= 18 || ehEstudante === true){
    console.log("Você paga 10 reais");
} else if (idade > 18 && ehEstudante == false){
    console.log("Você paga 20 reais");
}