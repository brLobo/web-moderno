/*
	Crie uma função que verifica se um número inteiro passado como parêmetro é
	divisível por 3 e retorne true ou false
*/

function divide3 (valor) {
	return valor % 3 === 0
}

console.log(divide3(3))
console.log(divide3(6))
console.log(divide3(33))
console.log(divide3(185))