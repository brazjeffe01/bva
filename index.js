const readline = require('readline')

const rl = readline.createInterface(
    process.stdin, process.stdout)

let num = 15

rl.question('What is your age? ', (age) => {
    num = age
    rl.close()
})

console.log('O que foi digitado: ' + num)


const apr = () => {
    console.log('-----------------------------------------\n----- BVA (BOUNDARY VALUE ANALYSIS) -----\n----------------------------------------- ')
    console.log('Esse é uma técnica de testes onde podemos validar quais valores são e não são aceitos dentro de um limite, com o intúito de aumentar a cobertura e diminiur a quantidade de dados.\n')
    exp()
}

const exp = () => {
    console.log('Exemplo: Dentro de uma range de valores entre 200 e 300, validamos quais são seus valores limites positivos e negativos, sempre utilizando a seguinte fórmula:')
    console.log('Valor Limite Inicial - 1, Valor Limite Inicial, Valor Limite Inicial +1, Valor Limite Final -1, Valor Limite Final, Valor Limite Final +1\n')
}
    
// do {
//     i = i + 1;
//     result = result + i;
//   } while (i < 5);

function bva(vi, vf) {

    if(vi > vf) {
        return console.log('Não foi possível prosseguir pois valor inicial é maior que o valor final.')
    }

    if((vf - vi) <= 2 && (vf - vi) >= 0) {
        console.log('Não foi possível prosseguir pois intervalo entre valores é muito pequeno.')
    } else {
        const viMinus = vi - 1
        const viPlus = +vi + 1
        const vfMinus = vf - 1
        const vfPlus = +vf + 1
        const valores = [viMinus, vi, viPlus,vfMinus, vf, vfPlus]
        
        console.log('Valores de entrada utilizados: Valor inicial: 200, Valor Final: 500.\nResultado: ')
        console.log(valores)

        return valores

    }
}

apr()

//bva(valorInicial, valorFinal)

module.exports = bva
