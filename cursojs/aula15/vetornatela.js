let valores = [8, 1, 7, 4, 2, 9]
//valores.sort() // Ordena os valores
console.log(valores)

//console.log(valores)
/*onsole.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/


for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // Código tradicional do percusso em vetores
}


/* Simplificando
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/