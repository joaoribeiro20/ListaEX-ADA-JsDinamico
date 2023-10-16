const numeros = [5,5,10,20]


//função somar todos numeros dentro do array
function soma(arrayNumeros){
    let resultado = 0
    arrayNumeros.forEach(element => {
       resultado = element + resultado
    }); 
    return resultado
}
console.log(`Resultado da soma de todos numeros dentro do array: ${soma(numeros)}`)
/* 

*/

//função exibir o maior numero dentro do array 
function maiorNumero(arrayNumeros){
    let maiorNumero = 0
    arrayNumeros.forEach(element => {
        if(maiorNumero < element){
            maiorNumero = element
        }
    }); 
    return maiorNumero
}
console.log(`O Maior numero dentor do array é: ${maiorNumero(numeros)}`)
/* 

*/
numeros.length
//função exibir a media dos valores dentro do array
function mediaNumero(arrayNumeros){
    let resultado = 0
    arrayNumeros.forEach(element => {
       resultado = element + resultado
    }); 
    return resultado / arrayNumeros.length 
}
console.log(`a media dos numeros dentro do array é: ${mediaNumero(numeros)}`)