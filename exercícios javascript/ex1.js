/*
	Crie uma função que dado dois valores (passados como parâmetros)
	mostre no console a soma, subtração, multiplicação e divisão desses valores.
*/

function operation(val1 = 0, val2 = 0) {
	console.log(`Adição ${val1 + val2}`)
	console.log(`Subtração ${val1 - val2}`)
	console.log(`Multiplicação ${val1 * val2}`)
	console.log(`Divisão ${val1 / val2}`)
}

operation(1, 2)