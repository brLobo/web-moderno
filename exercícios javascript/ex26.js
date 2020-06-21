/*
	Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

function pares() {
	for (let n = 0; n <= 100; n++) {
		if (n % 2 === 0) {
			console.log(n)
		}
	}
}

pares()