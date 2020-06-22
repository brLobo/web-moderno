/**
 * Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos
 * há nesse vetor e imprime a quantidade no console.
 */

 function qntNegativo(vetor) {
	 let qtdNeg = 0
	 for (let i = 0; i < vetor.length; i++) {
		if (vetor[i] < 0) {
			qtdNeg ++
		}
	 }
	 return qtdNeg
 }

 vetor = [-1, 10, 15, 50, -8, -9, 80]
 console.log(qntNegativo(vetor))