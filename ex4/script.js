let vetor1 = [];
let vetor2 = [];

for (let i = 0; i < 5; i++) {
    vetor1.push(parseInt(prompt(`Vetor 1 - Digite o ${i + 1}º valor:`)));
}

for (let i = 0; i < 5; i++) {
    vetor2.push(parseInt(prompt(`Vetor 2 - Digite o ${i + 1}º valor:`)));
}

let intersecao = [];

for (let numero of vetor1) {
    if (vetor2.includes(numero) && !intersecao.includes(numero)) {
        intersecao.push(numero);
    }
}

let mensagem = "Elementos em comum:\n\n";

for (let numero of intersecao) {
    mensagem += numero + "\n";
}

alert(mensagem);