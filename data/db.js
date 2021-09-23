let id = 1

function proximoID(){
    return id++
}


const perfis = [
    {
        id: 1,
        nome: 'Comum'
    },
    {
        id: 2,
        nome: 'Administrador'
    }
];

const usuarios = [{
    id: proximoID(),
    nome: 'Joao Silva',
    email: 'joaos@email.com',
    idade: 29,
    perfil_id: 1,
    status: 'ATIVO'
},{
    id: proximoID(),
    nome: 'Rafael Junior',
    email: 'rj@email.com',
    idade: 19,
    perfil_id: 1,
    status: 'INATIVO'
},{ 
    id: proximoID(),
    nome: 'Maria Silva',
    email: 'marias@email.com',
    idade: 25,
    perfil_id: 2,
    status: 'BLOQUEADO'
}];

module.exports = { usuarios, perfis, proximoID}