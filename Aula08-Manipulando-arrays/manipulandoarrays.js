
const listaDeConvidados = ["Thales", "Laura", "Luiza", "Daniela", "Valdeci", "Walfrido", "Vinicius", "Bruna", "Luana"];

//Push / Pop/ Shift / Unshift

// O Push serve para acrescentar um dado na lista, sem precisar refazer a variável, ou seja ele vai acrescentar a Lídia na lista de convidados.

listaDeConvidados.push("Lídia");
console.log(listaDeConvidados)

// O pop servirá para excluir um dado da lista, neste caso eu exclui a Lídia.

listaDeConvidados.pop("Lídia");
console.log(listaDeConvidados);

listaDeConvidados.unshift("Ingryd"); // Unshift serve para adicionar como o primeiro da lista array
console.log(listaDeConvidados);

listaDeConvidados.shift("Ingryd"); //Shift serve para remover o primeiro da lista array
console.log(listaDeConvidados);

// Existe também o include que é para saber se há um dado específico incluído no array

console.log("A Lídia está na lista de convidados? ", listaDeConvidados.includes("Lídia"));
