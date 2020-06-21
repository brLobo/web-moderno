/*
	Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
	aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
	aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
	"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function notaFinal(id, aNotas) {
	aNotas.sort((a,b) => a < b ? 1 : -1)

	let media = (aNotas[0] * 4 + aNotas[1] * 3 + aNotas[2] * 3)/10
	console.log(`
		Código do Aluno: ${id}.
		Notas: ${aNotas[0]}, ${aNotas[1]}, ${aNotas[2]}.
		${media < 5 ? 'Reprovado.' : 'Aprovado.'}
	`)
}

notaFinal(123, [2.8, 6, 3.5])
notaFinal(456, [8, 6, 10])