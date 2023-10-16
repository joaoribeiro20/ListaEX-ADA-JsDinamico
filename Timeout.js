/* 

 */
function teste(){
    console.log('função execultada com sucesso')
}
function execultarAposTempo(funcao , milissegundos) {
  setTimeout(() => {
        funcao()
    }, milissegundos)
}
execultarAposTempo(teste, 2000)
/////////////////////////////////////////////////////////////////////////////
/* 

 */
let testeFuncao = setTimeout(() => {
    console.log('***timeout testeFuncao***')
}, 1000)
function cancelarExecucao(timerClear){
    clearTimeout(timerClear)
    console.log('timeout cancelado')
}
cancelarExecucao(testeFuncao)
/////////////////////////////////////////////////////////////////////////////
/* 

 */
function intervaloPersonalizado(timeMilissegundos){
    let testeFuncao = setTimeout(() => {
        console.log('+++Função com intervalo de tempo personalizado+++')
    }, timeMilissegundos)
}
intervaloPersonalizado(3000)