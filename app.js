alert ("Boas Vindas ao jogo do numero secreto");
let numeroSecreto = 5;
console.log (numeroSecreto);
let chute = prompt ("Escolha um numero entre 1 e 10");

if (chute == numeroSecreto) {
    alert (`Isso Ai, você descobriu o numero Secreto ${numeroSecreto}`);
} else {
    alert ("Você errou :( ");
} 