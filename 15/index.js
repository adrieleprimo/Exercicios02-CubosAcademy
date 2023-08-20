const primeiroNome = "";
const sobrenome = "";
const apelido = "Luanzinho";

if (apelido === "" && sobrenome ==="" && primeiroNome ===""){
    console.log("Você é um indigente, sabia?");
} else if(apelido === "" && sobrenome ==="" && primeiroNome != ""){
    console.log(`${primeiroNome}`);
} else if (apelido != "" && sobrenome ==="" && primeiroNome != ""){
    console.log(`${primeiroNome} ${apelido}`);
} else if (apelido === "" && sobrenome !="" && primeiroNome != ""){
    console.log(`${primeiroNome} ${sobrenome}`);
} else if (apelido != "" && sobrenome ==="" && primeiroNome === ""){
    console.log(`${apelido}`);
} else{
    console.log(`${sobrenome}`);
}