let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    let nome = prompt(`Digite o nome da ${i + 1}ª pessoa:`);
    let idade = parseInt(prompt("Digite a idade:"));

    nomes.push(nome);
    idades.push(idade);
}

let mensagem = "Pessoas menores de idade:\n\n";

for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        mensagem += `${nomes[i]} - ${idades[i]} anos\n`;
    }
}

alert(mensagem);