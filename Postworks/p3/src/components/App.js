import React from 'react';

const App = () => {
	const [edad, setEdad] = React.useState('');
	const [genero, setGenero] = React.useState('');

	React.useEffect(() => {
		alert('Sugerencia de Regalo --> Selecciona tu genero y edad.');
	}, []);

	const cambiarEdad = (event) => setEdad(event.target.value);
	const cambiarGenero = (event) => setGenero(event.target.value);

	const mostrarRegalo = () => {
		if (genero === 'mujer') {
			switch (edad) {
				case '0': return 'Barbies';
				case '1': return 'Maquillaje';
				case '2': return 'Carro';
			}
		}
		if (genero === 'hombre') {
			switch (edad) {
				case '0': return 'Balones';
				case '1': return 'Ropa';
				case '2': return 'Casa';
			}
		}
	};

	return (
		<div className="margen">
			<p>Género</p>
			<input
				id="mujer"
				value="mujer"
				type="radio"
				name="genero"
				onClick={cambiarGenero}
			/>
			<label htmlFor="mujer">Mujer</label>
			<br />

			<input
				id="hombre"
				value="hombre"
				type="radio"
				name="genero"
				onClick={cambiarGenero}
			/>
			<label htmlFor="hombre">Hombre</label>
			<br />

			<p>Edad</p>
			<input
				id="0"
				value="0"
				type="radio"
				name="edad"
				onClick={cambiarEdad}
			/>
			<label htmlFor="0">0-10</label>
			<br />

			<input
				id="1"
				value="1"
				type="radio"
				name="edad"
				onClick={cambiarEdad}
			/>
			<label htmlFor="1">10-20</label>
			<br />

			<input
				id="2"
				value="2"
				type="radio"
				name="edad"
				onClick={cambiarEdad}
			/>
			<label htmlFor="2">20-30</label>
			<br /><br />

			{mostrarRegalo()}
		</div>
	);
};

export default App;