import React, { useState } from "react";

function ProbabilidadEscalera() {
	const [totalCartas, setTotalCartas] = useState(52);
	const [cartasEscalera, setCartasEscalera] = useState(5);
	const [probabilidad, setProbabilidad] = useState(0);
	const [mostrarResultado, setMostrarResultado] = useState(false);


	function calcularProbabilidad() {
		// Calcular el número total de posibles resultados
		const nS = combinatoria(totalCartas, cartasEscalera);

		// Calcular el número de formas en que se puede obtener una escalera de 5 cartas
		const nA = 10 * Math.pow(4, cartasEscalera) - (4 * cartasEscalera);

		// Calcular la probabilidad del evento A
		const pA = nA / nS;

		// Actualizar el estado de probabilidad con el resultado
		setProbabilidad(parseFloat(pA));
		setMostrarResultado(true);
	}

	// Función para calcular la combinatoria
	function combinatoria(n, k) {
		let numerator = 1;
		for (let i = n; i > n - k; i--) {
			numerator *= i;
		}
		let denominator = 1;
		for (let i = k; i > 1; i--) {
			denominator *= i;
		}
		return numerator / denominator;
	}

	return (
		<div className="bg-[#dedede6d] p-10 px-14 rounded-2xl shadow-2xl">
			<div className="w-full flex items-center">
				<label className="text-title-color font-medium">
					Número total de cartas:
					<input className="w-1/4 text-center h-12 rounded-md ml-5 mt-1 text-title-color bg-black-bg" type="number" value={totalCartas} onChange={(event) => setTotalCartas(Number(event.target.value))} />
				</label>
				<label className="text-title-color font-medium">
					Número de cartas en la escalera:
					<input className="w-1/4 h-12 rounded-md ml-5 text-center mt-1 text-title-color bg-black-bg" type="number" value={cartasEscalera} onChange={(event) => setCartasEscalera(Number(event.target.value))} />
				</label>

				<button onClick={calcularProbabilidad} className='bg-blue  w-1/3 text-black-bg py-3 px-10 rounded-lg font-medium' >Calcular probabilidad</button>
			</div>

			{mostrarResultado && (
				<div id="finalResult" className="bg-black-bg px-10 py-6 rounded-lg mt-8 flex justify-between items-center">
					<p className="text-white">La probabilidad de sacar una escalera de {cartasEscalera} cartas en un mazo de {totalCartas} cartas es:</p>
					<p className="bg-[#0000006d] py-3 px-12 rounded-lg text-white font-medium">{probabilidad.toExponential(6)}</p>
				</div>
			)}

		</div>
	);
}

export default ProbabilidadEscalera;
