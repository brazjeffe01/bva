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
        expect(result).not.toBeNull()
    })

    it('não deve prosseguir para calculos caso valores passados sejam strings', () => {
        const vi = 'asda'
        const vf = 'llhlhlh'

        const result = bva(vi,vf)
        console.log(typeof result)

        expect(result).toBeNaN()
    })
})