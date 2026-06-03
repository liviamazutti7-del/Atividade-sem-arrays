let nomes = [];

for (let i = 0; i < 7; i++) {
    nomes.push(prompt(`Digite o ${i + 1}º nome:`));
}

alert("Nomes na ordem inversa:\n" + nomes.reverse().join("\n"));