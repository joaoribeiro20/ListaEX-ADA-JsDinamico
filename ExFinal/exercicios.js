function soma(arrayNumeros) {
    let resultado = 0
    arrayNumeros.forEach(element => {
        resultado = element + resultado
    });
    return resultado
}
function maiorNumero(arrayNumeros) {
    let maiorNumero = 0
    arrayNumeros.forEach(element => {
        if (maiorNumero < element) {
            maiorNumero = element
        }
    });
    return maiorNumero
}
function mediaNumero(arrayNumeros) {
    let resultado = 0
    arrayNumeros.forEach(element => {
        resultado = element + resultado
    });
    return resultado / arrayNumeros.length
}
///////////////////////////////////////////////////
function contarPropriedades(obj) {
    let quantidade = Object.keys(objetoTeste)
    return quantidade.length
}
function juntarObjetos(obj1, obj2) {
    return newObjeto = Object.assign(obj1, obj2);
}
function encontrarPropriedade(obj, chave){
    return Object.getOwnPropertyDescriptor(obj, chave).value
}
////////////////////////////////////////////////////
function contadorInterval(){
    let valor = 0
    let loop  = setInterval(() => {
    pararContador(valor, loop)
    console.log(`função contador: ${valor = valor + 1}`)
    }, 1000);
}
function pararContador(contador,Finterval){
    if(contador>=9)
    clearInterval(Finterval)
}
function gerarNumerosAleatorios(){
    setInterval(() => {
        console.log(parseInt(Math.random()*100))
         }, 500);
}
////////////////////////////////////////////////////
function delayedPromise() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('Promise executada após 1 segundo de sua invocação')
        }, 1000)
    }).then((result) => {
        console.log(result) 
    })
      
}
function fetchData(url) {
    return new Promise((resolve,reject) => {
         fetch(url)
         .then((n) => { 
              resolve(n.json() )
              return resolve  
         })  
         .catch(()=>{
             return reject
         })
     })
     .then((res)=>{
         console.log('Dados obtidos na requisição')
         console.log(res)
     })
     .catch(error => console.log('Erro na solicitação/url'))
 }
 function gerarNumeroAleatorio(){
    return new Promise((resolve)=>{
        setTimeout(() => {
             resolve(parseInt(Math.random()*100))
        }, 2000)
       
    }).then((res)=>{
        console.log(res)
    })
}
/////////////////////////////////////////////////////
function execultarAposTempo(funcao , milissegundos) {
    setTimeout(() => {
          funcao()
      }, milissegundos)
  }
  let testeFuncao = setTimeout(() => {
    console.log('***timeout testeFuncao***')
}, 1000)
  function cancelarExecucao(timerClear){
    clearTimeout(timerClear)
    console.log('timeout cancelado')
}
function intervaloPersonalizado(timeMilissegundos){
    let testeFuncao = setTimeout(() => {
        console.log('+++Função com intervalo de tempo personalizado+++')
    }, timeMilissegundos)
}
/////////////////////////////////////////////////////////
function infoPessoa(obj){
    return `nome:${obj.name}, idade:${obj.age}, cidade:${obj.city}`
}
function desestruturarUsuario(obj){
    const { id, email } = obj
    const newObjeto = { id, email }
    return newObjeto
}
function informacoesLivro(obj){
    let titulo = obj.titulo
    let autor = obj.autor
    let ano = obj.ano
    let string = `O Livro ${titulo} foi escrito por ${autor} em ${ano}`
    return string
}
///////////////////////////////////////////////////////
function primeiroEUltimo(array){
    let first = array[0];
    let last = array[array.length-1];
    let newArray=[]
    newArray.push(first);
    newArray.push(last);
    return newArray
}
function extrairInfo(obj){
    const arrayIdade = obj.map(objeto => objeto.age)
    return arrayIdade
}
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
//////////////////////////////////////////////////////
function concatenarArrays(...arrays) {
    return [].concat(...arrays)
}
function somaNumeros(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0)
}
function mesclarObjetos(...objetos) {
    return objetos.reduce((result, obj) => ({ ...result, ...obj }), {})
}

