/*
    Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e
    tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o
    regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
*/

function jSimples (capitalInicial, tx, tempo) {
    return capitalInicial + (capitalInicial * tx * tempo)
}

function jCompostos (capitalInicial, tx, tempo) {
    return capitalInicial * (1 + tx) ** tempo
}

console.log(jSimples(100, 10/100, 2));
console.log(jCompostos(100, 10/100, 2));