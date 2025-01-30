
const idadedaIngryd = 34;
const maioridade  = 18;

console.log("Ingryd é maior de idade?", idadedaIngryd >= maioridade);

if (idadedaIngryd >= 18) {
console.log("Ingryd pode dirigir")
}
else{
    const anosFaltantes = maioridade - idadedaIngryd;
    console.log("Ingryd NÃO pode dirigir");
    console.log("Faltam ${anosFaltantes} anos para Ingryd poder dirigir");
}

// operadores  ternários

idadedaIngryd >= maioridade
    ? console.log("Ingryd pode dirigir")
    : console.log("Ingryd NÃO pode dirigir");

    /* Pode acontecer também de eu ter uma situação que seja não binária, ou seja, que tenham que existir muitas variáveis, sendo assim os operadores ternários não 
    seriam suficientes para satisfazer a declaração, exemplo abaixo*/

    const idadeDeUmaPessoa = 80;

// 0 a 12 anos --> infância
// 13 a 17 anos --> adolescência
// 18 a 25 anos --> jovem adulto
// 26 a 60 anos --> adulto
// mais que 60 anos --> idoso

if(idadeDeUmaPessoa >= 0 && idadeDeUmaPessoa <= 12){
    console.log("Infância");
} else if(idadeDeUmaPessoa >= 13 && idadeDeUmaPessoa <= 17) {
    console.log("Adolescência");
} else if(idadeDeUmaPessoa >= 18 && idadeDeUmaPessoa <= 25){
    console.log("Jovem Adulto");
}else if(idadeDeUmaPessoa >= 26 && idadeDeUmaPessoa <= 60){
    console.log("Adulto");
}else{
    console.log("Idoso");
}

//Template

const diaDaSemana = 2;
let nomeDoDia;

switch(diaDaSemana){
    case 0:
        nomeDoDia = "Domingo";
    break;
    case 1: 
        nomeDoDia = "Segunda";
    break;
    case 2: 
        nomeDoDia ="Terça";
    break;
    case 3: 
        nomeDoDia = "Quarta";
    break;
    case 4: 
        nomeDoDia = "Quinta";
    break;
    case 5: 
        nomeDoDia = "Sexta";
    break;
    case 6: 
        nomeDoDia = "Sábado";
    break;

}

console.log("Dia da semana " + nomeDoDia);
    
