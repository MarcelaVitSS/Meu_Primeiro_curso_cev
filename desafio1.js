const bonificacao = 1000;
const pontos = 190;

if(pontos>100){
    console.log(`Parabéns, sua pontuação foi maior que ${pontos}, então você ganhou uma bonificação de ${bonificacao}`)
}
else{
    console.log(`Infelizmente a sua nota foi menor que ${pontos}, então você não ganhará uma bonificação`)
}