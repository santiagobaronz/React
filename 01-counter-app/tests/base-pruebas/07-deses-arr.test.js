import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => { 

    test('Debe retornar un string y un numero', () => {

        const [ letters, numbers ] = retornaArreglo();
        // expect(letters).toBe('ABC')
        expect(numbers).toBe(123)
        expect(letters).toEqual(expect.any(String))


    })

 })