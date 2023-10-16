const obj = {
    name:"joao",
    age:21,
    city:"São Paulo"
}

function infoPessoa(obj){
    return `nome:${obj.name}, idade:${obj.age}, cidade:${obj.city}`
}
//console.log(infoPessoa(obj))

const UsuarioTeste = {
    id:0,
    name:"joao",
    email:"jvalves217@"
}

function desestruturarUsuario(obj){
    const { id, email } = obj
    const newObjeto = { id, email }
    return newObjeto
}
//console.log(desestruturarUsuario(UsuarioTeste))


const livro = {
    titulo:'Maestria',
    autor:'Robert Greene',
    ano:2012
}

function informacoesLivro(obj){
    let titulo = obj.titulo
    let autor = obj.autor
    let ano = obj.ano
    let string = `O Livro ${titulo} foi escrito por ${autor} em ${ano}`
    return string
}
console.log(informacoesLivro(livro))