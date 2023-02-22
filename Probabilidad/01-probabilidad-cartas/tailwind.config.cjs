/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			'poppins': ['system-ui']
		},
		screens: {
			sm: '425px',
			md: '700px',
			lg: '1024px',
			xl: '1220px',
		},
		container: {
			center: true,
		},
		colors: {
			'white': '#FFF', 
			'black-bg': '#17181c',
			'title-color': '#d1d4db',
			'text-color': '#6e727d',
			'blue': '#2563ea',
			'gray': '#707378',
		}
	},
	plugins: [],
}