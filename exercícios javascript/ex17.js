/*
	Um funcionário irá receber um aumento de acordo com o seu plano de
	trabalho, de acordo com a tabela abaixo:
	Plano Aumento
	A 10%
	B 15%
	C 20%
	Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
	novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function salaryIncrease(salary, plan) {
	switch (plan) {
		case 'A':
			return salary * 1.10

		case 'B':
			return salary * 1.15

		case 'C':
			return salary * 1.20

		default:
			return 'invalid plan!'
	}
}

console.log(salaryIncrease(10, 'A'))
console.log(salaryIncrease(10, 'B'))
console.log(salaryIncrease(10, 'C'))
console.log(salaryIncrease(10, 'D'))