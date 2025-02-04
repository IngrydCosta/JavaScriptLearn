//Hora de guardar as informações importante

const donaDaLista = "Ingryd"; //Essa "caixa" não vai mudar a dona da lista sempre será Ingryd, por isso usei o const
let tarefas = []; // Essa "caixa" vai mudar o tempo todo, por isso deixei indefinida e usei let

//Agora vamos adicionar as funções, teremos três funções (1 - Adicionar tarefa / 2 - Listar tarefa /  3 - Listar como concluída)

// Função de adicionar uma tarefa

function adicionarTarefa (tarefa){

    
    tarefas.push({nome: "tarefa", concluida: false}); //Adiciona uma tarefa
    console.log(`tarefa "${tarefa}"Adicionada com Sucesso!`);

}

// Função de listar uma tarefa

function listarTarefas() {
    console.log(`Lista de tarefas de ${donoDaLista}:`);
    tarefas.forEach((tarefa, index) => {
      const status = tarefa.concluida ? "✅" : "❌";
      console.log(`${index + 1}. ${tarefa.nome} ${status}`);
    });
}

// Função de Listar como conluída

function concluirTarefa(indice) {
    if (tarefas[indice - 1]) {
      tarefas[indice - 1].concluida = true;
      console.log(`Tarefa "${tarefas[indice - 1].nome}" concluída!`);
    } else {
      console.log("Tarefa não encontrada.");
    }
  }
