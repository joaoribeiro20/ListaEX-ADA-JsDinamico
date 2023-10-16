const arrayTeste = [5,10,9,300,33,66]

const arrayObjTeste = [
    {
        name:"joao",
        age:21,
    },
    {
        name:"vitor",
        age:18,
    },
    {
        name:"ribeiro",
        age:30,
    }
]

function primeiroEUltimo(array){
    let first = array[0];
    let last = array[array.length-1];
    let newArray=[]
    newArray.push(first);
    newArray.push(last);
    return newArray
}
console.log(`Array original: ${arrayTeste}`)
console.log(`Novo array criado atraves da função com primeiro e ultimo valor do array original: ${primeiroEUltimo(arrayTeste)}`)

function extrairInfo(obj){
    const arrayIdade = obj.map(objeto => objeto.age)
    return arrayIdade
}
console.log(extrairInfo(arrayObjTeste))

function separarArrays(array){
    let arrayPar = []
    let arrayImpares = []

    for (let n of array) {
        if (n %2 == 0) {
            arrayPar.push(n)
        } else {
            arrayImpares.push(n)
        }
    }
    return [arrayPar, arrayImpares]
}
console.log(separarArrays(arrayTeste))
