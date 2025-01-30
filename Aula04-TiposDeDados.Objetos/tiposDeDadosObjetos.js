
const fichaDaIngryd = {
nome: "Ingryd Costa",
idade: 34,
dataDeNascimento: "15/05/1990",
temFilhos: false,
};

console.log('Ficha da Ingryd: ', fichaDaIngryd);

/* Acima foi realizado uma tipagem do tipo dados, onde eu coloco as propriedades de cada dado separadamente para uma variável apenas;
    Quando eu imprimi, eu imprimi pelo nome da variável então apareceu no console todas as propriedades */

    /*Quando eu quiser imprimir apenas uma propriedade da minha variável inteira é só concatenar como demonstro abaixo*/

    console.log('Nome: ' + fichaDaIngryd.nome);

    /* Eu também posso acrescentar propriedades a minha variável, mesmo depois de criada, como não posso criar uma mesma variável por causa do const ser imutável, 
    eu posso escrever o nome da variável, seguido de "." e o novo nome da nova propriedade e atribuir o valor dele, como demonstro abaixo */

    fichaDaIngryd.carro = "FordKa";

    console.log('Ficha da Ingryd', fichaDaIngryd);

    // Eu consigo também excluir alguma propriedade se eu quiser, usando o delete, como demonstro abaixo//

    delete fichaDaIngryd.carro;

    console.log('Ficha da Ingryd: ', fichaDaIngryd);
    
