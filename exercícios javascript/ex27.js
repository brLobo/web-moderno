/*
	Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
	crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
	quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function crescer(alt1, tx1, alt2, tx2) {
	if(alt1 == alt2){
        if (tx1 > tx2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(tx1 < tx2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (alt1 > alt2) {
            if(tx1 >= tx2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(alt2, tx2, alt1, tx1)
            }
        } else {
            if(tx2 >= tx1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(alt1, tx1, alt2, tx2)
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}

console.log(crescer(150, 2, 130, 4));