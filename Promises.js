//pending = momento que criamos a promisse (momento que ela ainda nao foi execultada, nem com sucesso e nem com erro)
//fulfilled = quando a promisse for execultada com sucesso ela vai passar para o statsus fulfilled
//rejected = quando a promisse for execultada e der erro ela entra no status rejected

//then = quando o status da promisse se encontra em fulfilled é automaticamente direcionado para o then
//catch =  quando o status da primesse se encontra em rejeccted é automaticamente direcionado para o catch

//A palavara reservasa promisse permite a gente criar uma promissa, ela recebe dois parametro, um para sucesso e o outro para erro

function delayedPromise() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('Promise executada após 1 segundo de sua invocação')
        }, 1000)
    }).then((result) => {
        console.log(result) 
    })
      
}
delayedPromise() 
///////////////////////////////////////////////////////////////////////////////////
/* 
 */
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
fetchData('https://viacep.com.br/ws/05868590/json/')
//////////////////////////////////////////////////////////////////////////////////
/* 
 */
function gerarNumeroAleatorio(){
    return new Promise((resolve)=>{
        setTimeout(() => {
             resolve(parseInt(Math.random()*100))
        }, 2000)
       
    }).then((res)=>{
        console.log(res)
    })
}
gerarNumeroAleatorio()