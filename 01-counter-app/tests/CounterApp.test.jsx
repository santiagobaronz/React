import { render, screen, fireEvent } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp";

describe('Pruebas con el <CounterApp />', () => { 

    const value = 10;
    
    test('Debe hacer match con el snapshot', () => { 
        const { container } = render(<CounterApp value={value}/>)
        expect(container).toMatchSnapshot()
     })

     test('Debe mostrar el valor inicial de 100', () => { 
        render(<CounterApp value={100}/>)
        expect(screen.getByText(100)).toBeTruthy()
     })

     test('Debe de incrementar con el boton +1', () => { 
        render(<CounterApp value={value}/>)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText(value + 1)).toBeTruthy()
     })

     test('Debe de decrementar con el boton -1', () => { 
        render(<CounterApp value={value}/>)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText(value - 1)).toBeTruthy()
     })

     test('Debe de resetear con el boton Reset', () => { 
        render(<CounterApp value={value}/>)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))
        expect(screen.getByText(value)).toBeTruthy()
     })


 })