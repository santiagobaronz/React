import React, { useRef } from 'react'
import Escalera from './Escalera'
import { Header } from './Header'

Header
export const HomePage = () => {

	const elementoAncla = useRef(null);

	function moverAVistaAncla() {
		if (elementoAncla.current !== null) {
		  elementoAncla.current.scrollIntoView({ behavior: "smooth" });
		}
	  }

	return (

		<div>
			<Header />

			<div className='mt-20'>

				<div className='span-info rounded-lg font-medium flex'>
					<i className="bi bi-info-circle mr-3"></i>
					<p>Enlace del ejercicio <a href='/assets/()(20201020111)_2.59(D)_A_1_1.pdf' target={'_blank'} className='text-blue'>resuelto</a></p>
				</div>

				<h2 className='mt-10 text-7xl font-bold text-center text-title-color'>Obtén la <span className='text-blue'>probabilidad</span> de sacar escalera con cartas.</h2>
				<p className='mt-10 text-center text-text-color text-xl w-4/6 m-auto'>Esta herramienta permite al usuario ingresar el número de cartas que se reparten y el número de cartas necesarias para formar una escalera. Luego, calculara la probabilidad de sacar una escalera específica y la probabilidad de sacar cualquier escalera.</p>

				<button onClick={moverAVistaAncla} className='bg-blue py-3 px-7 text-black-bg font-medium rounded-xl block text-center w-max m-auto mt-10'>Conocer cómo funciona</button>

			</div>

			<div className='flex items-center mt-20 mb-20' ref={elementoAncla}>
				<div className='w-1/2'>
					<div className='mr-10 ml-20'>
						<span className='text-text-color font-medium'>• OBTENER LOS DATOS •</span>
						<h3 className='text-title-color font-medium text-3xl mt-5 mb-5'>Obtenenemos el número total de cartas en el mazo y el número de cartas que se desean en la escalera.</h3>
						<p className=' text-text-color text-xl'>Para calcular la probabilidad de obtener una escalera en un juego de cartas, primero debemos determinar el tamaño del mazo y cuántas cartas deben estar en la escalera.</p>
					</div>
				</div>
				<div className='w-1/2 flex justify-center'>
					<img src="/assets/first.png" className='w-5/6' />
				</div>
			</div>

			<div className='flex items-center mb-28'>
				<div className='w-1/2 flex justify-center'>
					<img src="/assets/second.png" className='w-5/6' />
				</div>
				<div className='w-1/2'>
					<div className='mr-10 ml-20'>
						<span className='text-text-color font-medium'>• HACER CALCULOS •</span>
						<h3 className='text-title-color font-medium text-3xl mt-5 mb-5'>Calcular el número total de combinaciones de cartas.</h3>
						<p className=' text-text-color text-xl'>La fórmula de combinaciones se utiliza para calcular el número total de formas en que se pueden seleccionar un número determinado de objetos de un grupo más grande. En este caso, el número total de combinaciones de cartas se calcula utilizando la fórmula (n! / (k! * (n-k)!)), donde n es el número total de cartas y k es el número de cartas en la escalera.</p>
					</div>
				</div>
			</div>

			<div className='flex items-center mb-28'>
				<div className='w-1/2'>
					<div className='mr-10 ml-20'>
						<span className='text-text-color font-medium'>• OTROS CALCULOS •</span>
						<h3 className='text-title-color font-medium text-3xl mt-5 mb-5'>Calculamos el número total de escaleras posibles en el mazo</h3>
						<p className=' text-text-color text-xl'>La fórmula para calcular el número total de escaleras posibles en un mazo es [(n-k+1)(n-k)(n-2k+1)] / 6, donde n es el número total de cartas y k es el número de cartas en la escalera. Esta fórmula tiene en cuenta las diferentes posibles combinaciones de palos y valores de las cartas en la escalera.</p>
					</div>
				</div>
				<div className='w-1/2 flex justify-center'>
					<img src="/assets/number3.png" className='w-5/6' />
				</div>
			</div>

			<div className='flex items-center mb-28 bg-[#ffffff6d] p-10 px-14 rounded-2xl shadow-2xl'>
				<div className='w-1/2 flex justify-center'>
					<img src="/assets/number4.png" className='w-5/6' />
				</div>
				<div className='w-1/2'>
					<div className='mr-10 ml-20'>
						<span className='text-text-color font-medium'>• ÚLTIMO CALCÚLO •</span>
						<h3 className='text-title-color font-medium text-3xl mt-5 mb-5'>Calcular la probabilidad de obtener una escalera.</h3>
						<p className=' text-text-color text-xl'>Para calcular la probabilidad de obtener una escalera, dividimos el número total de escaleras posibles por el número total de combinaciones de cartas y multiplicamos el resultado por 100. El resultado final se expresa como un porcentaje.</p>
					</div>
				</div>
			</div>

			<div className='mb-40'>
				<Escalera />
			</div>
		</div>
	)
}
