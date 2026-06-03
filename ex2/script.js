let vetor = [];

for (let i = 0; i < 8; i++) {
    let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
    vetor.push(numero);
}

let soma = 0;

for (let numero of vetor) {
    soma += numero;
}

let media = soma / vetor.length;

let mensagem = "Valores acima da média:\n";

for (let numero of vetor) {
    if (numero > media) {
        mensagem += numero + "\n";
    }
}

alert(mensagem);