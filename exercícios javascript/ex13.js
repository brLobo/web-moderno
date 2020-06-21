/*
	Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido
	dado o número referente ao dia.
	Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function diaSemana(dia) {
    switch (dia) {
        case 1:
            return "Final de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia útil"
        case 7:
            return "Final de semana"
        default:
            return "Dia inválido"
    }
}

console.log(diaSemana(5))
console.log(diaSemana(1))
console.log(diaSemana(7))