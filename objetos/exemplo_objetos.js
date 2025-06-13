const aluno = {
    nome:"joao",
    idade: 17,
    curso: "Desenvolvimento de sistema"

};

console.log(aluno.nome);
console.log(aluno["idade"]);

aluno.matricula = "2025A"
aluno.idade = 18 
console.log(aluno);

delete aluno.curso;