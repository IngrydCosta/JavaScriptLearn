
//Com arrays dá pra fazer uma lista inteira a partir de apenas uma variável

const listaDeConvidados = [ "Thales", "Laura", "Luiza", "Daniela", "Valdeci", "Walfrido", "Vinicius", "Bruna", "Luana"];

console.log("No aniversário da Ingryd ela terá presentes os seguintes candidatos: ", listaDeConvidados);

//Também pelo "length" dá pra saber a quantidade da lista inserida na variável

console.log("Quantos convidados? ", listaDeConvidados.length);

//Se eu precisar saber o primeiro nome da lista preciso colocar dentro do array um "0" porque para a linguagem todo primeiro inicia com zero.

console.log("Primeiro convidado da lista: ", listaDeConvidados[0]);

//Se eu precisar saber o último nome preciso usar o length -1 por causa do zero inicial.

console.log("Último convidado da lista: ", listaDeConvidados[listaDeConvidados.length - 1]);

const indiceLaura = listaDeConvidados.indexOf("Laura");

console.log("Qual o índice em que Laura se encontra na lista? ", indiceLaura);

//O código vai gerar laura como posição 1 porque Thales está em 0, para "corrigir" isso basta colocar + 1 

console.log("Laura está em qual número da lista ", indiceLaura + 1);


