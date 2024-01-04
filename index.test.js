import { it, describe, expect } from 'vitest'
import { apr, exp, bva } from './index.js'

describe('bva()', () => {

    it('deve calcular valores limites normalmente', () => {
        //Arrange
        const vi = 100
        const vf = 200
    
        //Act
        const result = bva(vi, vf)
    
        //Assert
        expect(result).toStrictEqual([ 99,100,101,199,200,201 ])
    })

    it('não deve prosseguir para calculos caso valores passados sejam strings', () => {
        const vi = 'asda'
        const vf = 'llhlhlh'

        const result = bva(vi,vf)

        expect(result).toBeUndefined()
    })

    it('deve apresentar erro caso não seja passado nenhum valor para a função', () => {
        const vi = ''
        const vf = ''

        const resultado = bva(vi,vf)

        //expect(resultado).not.toThrow()
    })
})