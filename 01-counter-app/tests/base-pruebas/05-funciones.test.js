import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        // Los objetos se comparan de una forma diferente porque apuntan
        // a un espacio de memoria diferente. Pero eso usamos el toEqual
        // para comparar dos objetos

        expect(testUser).toEqual(user)

     })

     test('getUsuarioActivo debe retornar un ojeto', () => { 
        const name = 'Santiago'
        const userTest = getUsuarioActivo(name);
        expect(userTest).toStrictEqual({
            uid: 'ABC567',
            username: name
        })
      })

 })