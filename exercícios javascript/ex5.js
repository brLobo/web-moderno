function mascada(valor) {
	return `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
}

console.log(0.1 + 0.2)
console.log(mascada(0.1 + 0.2))