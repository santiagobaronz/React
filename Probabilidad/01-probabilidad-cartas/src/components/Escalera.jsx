import React, { useState } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

function generarColorAleatorio() {
	var letras = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
	  color += letras[Math.floor(Math.random() * 16)];
	}
	return color;
  }

function ProbabilidadEscalera() {

	const [totalCartas, setTotalCartas] = useState(52);
	const [cartasEscalera, setCartasEscalera] = useState(5);
	const [probabilidad, setProbabilidad] = useState(0);
	const [mostrarResultado, setMostrarResultado] = useState(false);
	const [chartData, setChartData] = useState({
		labels: ["Probabilidades de sacar una escalera de n cartas con un mazo de m cartas"],
		datasets: [
		  {
			label: "",
			data: null,
			backgroundColor: "transparent",
			borderColor: "transparent",
			borderWidth: 1,
		  },
		],
	  });

	  

	const options = {}


	function calcularProbabilidad() {
		// Calcular el número total de posibles resultados
		const nS = combinatoria(totalCartas, cartasEscalera);

		// Calcular el número de formas en que se puede obtener una escalera de 5 cartas
		const nA = 10 * Math.pow(4, cartasEscalera) - (4 * cartasEscalera);

		// Calcular la probabilidad del evento A
		const pA = nA / nS;

		// Actualizar el estado de probabilidad con el resultado
		setProbabilidad(parseFloat(pA));

		setChartData(prevChartData => {
			return {
				...prevChartData,
				datasets: [
					...prevChartData.datasets,
					{
						label: `Probabilidad con mazo de ${totalCartas} y ${cartasEscalera} cartas en escalera`,
						data: [pA],
						backgroundColor: generarColorAleatorio(),
						borderColor: "#ccc",
						borderWidth: 1,
					},
				],
			};
		});

		(cartasEscalera <= 0) ? setMostrarResultado(false) : setMostrarResultado(true)
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
					<input className="w-1/4 h-12 rounded-md ml-5 text-center mt-1 text-title-color bg-black-bg" type="number" min={0} value={cartasEscalera} onChange={(event) => setCartasEscalera(Number(event.target.value))} />
				</label>

				<button onClick={calcularProbabilidad} className='bg-blue  w-1/3 text-black-bg py-3 px-10 rounded-lg font-medium' >Calcular probabilidad</button>
			</div>

			{mostrarResultado && (
				<div>
					<div id="finalResult" className="bg-black-bg px-10 py-6 rounded-lg mt-8 flex justify-between items-center">
						<p className="text-white">La probabilidad de sacar una escalera de {cartasEscalera} cartas en un mazo de {totalCartas} cartas es:</p>
						<p className="bg-blue py-3 px-12 rounded-lg text-black-bg font-medium">{probabilidad.toExponential(6)}</p>
					</div>
					<div className="mt-20">
						<Bar data={chartData} options={options}></Bar>
					</div>
				</div>


			)}

			{(!mostrarResultado && probabilidad != 0) && (
				<div id="finalResult" className="bg-black-bg px-10 py-6 rounded-lg mt-8 flex justify-between items-center">
					<p className="text-white">Los valores ingresados no son válidos</p>

				</div>
			)}

		</div>
	);
}

export default ProbabilidadEscalera;
