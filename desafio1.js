const bonificacao = 1000;
const pontos = 190;

if(pontos>100){
    console.log(`Parabéns, sua pontuação foi maior que 100, sendo de ${pontos} pontos, então você ganhou uma bonificação de ${bonificacao}`)
}
else{
    console.log(`Infelizmente a sua nota foi menor que 100, sendo de ${pontos} pontos, então você não ganhará uma bonificação`)
}