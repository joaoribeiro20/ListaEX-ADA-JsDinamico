const array1 = [2,3,55,4,20]
const array2 = [33,10,30,700]


function concatenarArrays(...arrays) {
    return [].concat(...arrays)
}
console.log(concatenarArrays(array1,array2))

//2
function somaNumeros(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0)
}

//3
function mesclarObjetos(...objetos) {
    return objetos.reduce((result, obj) => ({ ...result, ...obj }), {})
}
