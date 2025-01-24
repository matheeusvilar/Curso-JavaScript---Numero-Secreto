alert ("Boas Vindas ao jogo do numero secreto");
let numeroSecreto = 5;
console.log (numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao numero secreto
while(chute != numeroSecreto){
    chute = prompt ("Escolha um numero entre 1 e 10");
    //se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto ){
            alert (`O Numero secreto é menor que ${chute}`);
        }else {
            alert(`O Numero secreto é maior que ${chute}`);
        }
        //tentativas = tentativas +1;
        tentativas ++;
    }
}

if (tentativas > 1){
    alert (`Isso Ai, você descobriu o numero Secreto ${numeroSecreto} com ${tentativas} tentativas` );

}else {
    alert (`Isso Ai, você descobriu o numero Secreto ${numeroSecreto} com ${tentativas} tentativa` );
}


