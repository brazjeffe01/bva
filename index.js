const read = require('readline-sync')

const apr = () => {
    console.log('-----------------------------------------\n----- BVA (BOUNDARY VALUE ANALYSIS) -----\n----------------------------------------- ')
    console.log('Esse é uma técnica de testes onde podemos validar quais valores são e não são aceitos dentro de um limite, com o intúito de aumentar a cobertura e diminiur a quantidade de dados.')
    exp()
}

const exp = () => {
    console.log('Exemplo: Dentro de uma range de valores entre 200 e 300, validamos quais são seus valores limites positivos e negativos, sempre utilizando a seguinte fórmula:')
    console.log('Valor Limite Inicial - 1, Valor Limite Inicial, Valor Limite Inicial +1, Valor Limite Final -1, Valor Limite Final, Valor Limite Final +1')
}

const bva = (vi, vf) => {

    if(vi > vf) {
        console.log('Não foi possível prosseguir pois valor inicial é maior que o valor final.')
        return
    }

    if((vf - vi) <= 2 && (vf - vi) >= 0) {
        console.log('Não foi possível prosseguir pois intervalo entre valores é muito pequeno.')
    } else {
        const viMinus = vi - 1
        const viPlus = +vi + 1
        const vfMinus = vf - 1
        const vfPlus = +vf + 1
        const valores = [viMinus, vi, viPlus,vfMinus, vf, vfPlus]
        
        console.log(valores)

    }
}

apr()

const valorInicial = read.questionInt('Digite o valor inicial: ', {
    limitMessage: 'Por favor, digite um numero valido.'
})
const valorFinal = read.questionInt('Digite o valor final: ', {
    limitMessage: 'Por favor, digite um numero valido.'
})

bva(valorInicial,valorFinal)

