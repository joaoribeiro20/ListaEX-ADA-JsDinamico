const objetoTeste = {
    firstName: "joao",
    lastName: "ribeiro",
    age: 21,

  };
const objetoTeste1 = {
    Profession: "desenvovlvedor",
    Course: "eng.computação",
    class: 163,
  };
//console.log(objetoTeste) 
///////////////////////////////////////////////////////////////////////////////////////////
/* 
função permite contar quantas proridades existe dentro de um objeto
*/
function contarPropriedades(obj){
let quantidade = Object.keys(objetoTeste)
return quantidade.length
}
console.log(`No objeto x encontramos ${contarPropriedades(objetoTeste)} de proriedades`)
///////////////////////////////////////////////////////////////////////////////////////////
/* 
função permite juntas as proridades de dois objetos diferentes em apenas 1 novo objeto
*/
function juntarObjetos(obj1,obj2){
    return newObjeto = Object.assign(obj1, obj2);
}
console.log("Esse objeto é a junção de dois outros objetos (objetox e objetoy):")
console.log(juntarObjetos(objetoTeste,objetoTeste1))
///////////////////////////////////////////////////////////////////////////////////////////
/* 
função que permite pegar o valor de uma proridade de um objeto atraves do nome da proridade
*/
function encontrarPropriedade(obj, chave){
    return Object.getOwnPropertyDescriptor(obj, chave).value
}
console.log(`A proridade pesquisada dentro do objeto foi AGE, o valor encontrado é:${encontrarPropriedade(objetoTeste, "age")}`)
