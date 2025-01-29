/* Tipos de Dados:
- Number: Números;
- String: Texto;
- Boolean: (Verdadeiro ou Falso - True or False);
- Undefined: Uma variável que foi declarada, mas que não recebeu valor ainda;
- Null: Variáveis que têm ausência de valor;
- Symbol: Variáveis que não vão sofrer alteração nunca!; (Quase nunca usa!)
- BigInt: Variáveis que vão declarar números MUITO grandes.  (Quase nunca usa!)
ATENÇÃO: Essas são variáveis do tipo primitivo!*/
 
const nome = "Ingryd";
console.log(nome);

const idade = 34;
console.log(idade);

let cabeloDaIngryd = true;
console.log("O cabelo da Ingryd é Médio?: ", cabeloDaIngryd);


cabeloDaIngryd = false;
console.log("1 ano depois...", cabeloDaIngryd);

let profissao;
console.log(profissao);

profissao = "programadora";
console.log(profissao);
