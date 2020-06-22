/**
 * ​Crie dois vetores chamados vetorPilha e vetorAdiciona.
 * Inicialmente, o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5].
 * Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
 * e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor.
 * Ao final das operações imprima os vetores no console.
 */

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(vetorInicial, vetorAdicionar) {
    for(let i = 0; i < vetorAdicionar.length; i++) {
        console.log(vetorAdicionar[i])
        vetorInicial.push(vetorAdicionar[i])
    }
    console.log('Vetor adicionado: ' + vetorAdicionar)
    console.log('Vetor resultado: ' + vetorInicial)
}

adicionaVetor(vetorPilha, vetorAdiciona)

let vetorPilha2 = [1, 2, 3, 4, 5]
let vetorAdiciona2 = [6, 7, 8, 9, 10]

function addVetor(v1, v2) {
	const resultado = v1.concat(v2)
	console.log(`vetorPilha ${v1}`)
	console.log(`vetorAdiciona ${v2}`)
	console.log(`resultado ${resultado}`)
}

addVetor(vetorPilha2, vetorAdiciona2)