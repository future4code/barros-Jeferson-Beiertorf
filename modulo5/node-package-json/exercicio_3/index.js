// Exercício 3
    
// Crie uma aplicação Node que receba uma string representando uma tarefa. 
// O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas.
// A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

// $ npm start "Comprar Leite"

// Tarefa adicionada com sucesso!

// tarefas: [
// 	"Lavar a louça",
// 	"Comprar Leite"
// ]


const list = [
    {Horário: "19 horas", Atividade: "estudar"},
    {Horário: "30/30 min", Atividade: "beber água"}, 
    {Horário: "24/7", Atividade: "chorar as pitangas"}
]

const newList = process.argv[2]

list.push({Atividade: newList})

console.log(`Tarefa adicionada com sucesso!`);
console.table(list)