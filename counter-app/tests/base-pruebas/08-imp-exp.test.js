import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe retornar un heroe por ID', () => { 
        const id = 1;
        const hero = getHeroeById(id)
        expect(hero).toEqual({id: 1,name: 'Batman',owner: 'DC'})
    })

    test('getHeroeById debe retornar undefined si no existe', () => { 
        const id = 100;
        const hero = getHeroeById(id)
        expect(hero).toBeFalsy()
    })

    // Tarea getHeroesByOwner
    // Debe retornar un arreglo con los heroes de DC
    // Lenght === 3
    // toEqual al arreglo filtrado

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => { 
        const owner = "DC"
        const heroes = getHeroesByOwner(owner)
        expect(heroes.length).toBe(3)
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner))
     })

    // debe retornar un arreglo con los heroes de Marvel
    // length === 2

    test('getHeroesByOwner retorna un arreglo con los heroes de Marvel', () => { 
        const owner = "Marvel"
        const heroes = getHeroesByOwner(owner)
        expect(heroes.length).toBe(2)
     })

 })