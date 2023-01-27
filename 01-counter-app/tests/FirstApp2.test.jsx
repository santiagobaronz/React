import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => { 

	const title = 'Hola, soy Santiago'

    test('Debe hacer match con el snapshot', () => { 
		const { container } = render(<FirstApp title={title}/>)
		expect(container).toMatchSnapshot();
     })

	 test('Debe de mostrar el mensaje "Hola, soy Santiago"', () => { 
		render(<FirstApp title={title}/>)
		expect(screen.getByText(title)).toBeTruthy()
     })

	 test('Debe de mostrar el titulo en un h1', () => { 
		render(<FirstApp title={title}/>)
		expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)
     })

	 test('Debe de mostrar el subtitulo enviado por props', () => { 
		const subTitle = 'Esto es un subtitulo'
		render(<FirstApp title={title} subtitle={subTitle}/>)
		expect(screen.getAllByText(subTitle).length).toBe(1)
     })

 })