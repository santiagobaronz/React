import { render, screen } from "@testing-library/react"
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


 })