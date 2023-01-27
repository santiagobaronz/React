import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp', () => { 

    // test('Debe de hacer match con el snapshot', () => { 
    //     const title = 'Hola, soy otra persona'
    //     const {container} = render( <FirstApp title={title} />)
    //     expect(container).toMatchSnapshot();
    //  })

     test('Debe mostrar el titulo en el h1', () => { 
        const title = 'Hola, soy otra persona'
        const {container, getByText, getByTestId} = render( <FirstApp title={title} />)
        expect(getByText(title)).toBeTruthy()
        expect(getByTestId('test-title').innerHTML).toContain(title)

     })

     test('Debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, soy otra persona'
        const subtitle = 'Soy un subtitle'
        const {getByText} = render( <FirstApp title={title} subtitle={subtitle} />)
        expect(getByText(title)).toBeTruthy()

        expect(getByText(subtitle)).toBeTruthy()

     })


 })