import { it, describe, expect } from 'vitest'
import { apr, exp, bva } from './index.js'

it('deve calcular valores limites normalmente', () => {
    //Arrange
    const vi = 100
    const vf = 200

    //Act
    const result = bva(vi, vf)

    //Assert
})