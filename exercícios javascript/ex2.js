/*
	Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
	Equilátero: Os três lados são iguais.
	Isósceles: Dois lados iguais.
	Escaleno: Todos os lados são diferentes.

	Crie uma função que recebe os comprimentos dos três lados de um triângulo e
	retorne sua classificação quanto ao tamanho de seus lados.
	(Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
*/

function triangleType(side1 = 0, side2 = 0, side3 = 0) {
	let cType = 'indefinido'

	if (side1 === side2 && side2 === side3) {
		cType = 'Equilátero'
	} else if (side1 === side2 || side2 === side3 || side3 === side1) {
		cType = 'Isóceles'
	} else {
		cType = 'Escaleno'
	}
	return cType
}

console.log(triangleType(1, 1, 1))
console.log(triangleType(1, 1, 2))
console.log(triangleType(1, 2, 3))