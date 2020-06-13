function jSimples (capitalInicial, tx, tempo) {
    return capitalInicial + (capitalInicial * tx * tempo)
}

function jCompostos (capitalInicial, tx, tempo) {
    return capitalInicial * (1 + tx) ** tempo
}

console.log(jSimples(100, 10/100, 2));
console.log(jCompostos(100, 10/100, 2));