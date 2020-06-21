/*
	Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica
	O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a
	realize com os valoresnuméricos na ordem que foram inseridos.
	Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3.
	Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.
	Crie um caso default para operações inválidas.
*/

function calculator(nValue1, nValue2, cOperator ) {
	switch (cOperator) {
		case '+':
			return nValue1 + nValue2

		case '-':
			return nValue1 - nValue2

		case '*':
			return nValue1 * nValue2

		case '/':
			return nValue1 / nValue2

		default:
			return 'Invalid operation!'
	}
}

console.log(calculator(1, 2, '+'))
console.log(calculator(5, 3, '-'))
console.log(calculator(8, 7, '*'))
console.log(calculator(9, 8, '/'))
console.log(calculator(9, 8, ''))