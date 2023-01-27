describe('Pruebas en el archivo de demo', () => {

    // Se debe hacer un solo describe por archivo de prueba
    // Se pueden hacer tantos test por archivo como se quiera dentro del describe

    test('Esta prueba no debe de fallar', () => {

        // 1. Inicializacion
        const message1 = 'Hola Mundo';
    
        // 2. Estimulo
        const message2 = message1.trim();
    
        // 3. Observamos el comportamiento... esperado
        expect(message1).toBe(message2)
    
    })
})

