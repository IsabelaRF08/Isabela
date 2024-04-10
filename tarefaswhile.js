const entrada = require('readline-sync')

//EXERCÍCIO 01
// let num1 = Math.random(0 && 11)
// let a1 = parseFloat(entrada.question(`Descubra o numero:`))
// while(num1 != a1)
// {
//     console.log(parseFloat(entrada.question(`esse numero é menor do que ${a1}`)))
//     a1 = entrada.question('descubra o numero: ')
//     tentativas++
//     if(tentativas == 3)
//     {
//         break;
//     }
//     if (num1 < a1)
//     {
//         console.log(parseFloat(entrada.question(`esse numero é maior do que ${a1}, vc tem somente mais duas chances:`)))
//         if(tentativas == 2)
//         {
//             break;
//         }
//     }
// }


//EXERCÍCIO 02
let dado1 = parseFloat(entrada.question(`Qual numero caiu no dado1?: `))
let dado2 = parseFloat(entrada.question(`Qual numero caiu no dado2?: `))
while(dado1 + dado2 != 7 || dado1 + dado2 != 11)
{
    console.log('Você perdeu o jogo!!')
    if(dado1 + dado2 == 7 || dado1 + dado2 == 11 )
    {
        console.log('Você ganhou o jogo!')
    }
}
