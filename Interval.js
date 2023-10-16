
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
//contadorInterval()


function gerarNumerosAleatorios(){
    setInterval(() => {
        console.log(parseInt(Math.random()*100))
         }, 500);
}
gerarNumerosAleatorios()
