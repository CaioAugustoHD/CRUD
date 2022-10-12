const lista = document.querySelector('.lista-pessoas');
const lista__body = document.querySelector('.lista-pessoas__body');

const botoesCancelar = document.querySelectorAll('.botoes-cancelar');

const modalAddPessoa = document.querySelector('.modal-addPessoa');
const btnAddPessoa = document.querySelector('.btn-addPessoa');
const btnCadastrar = document.querySelector('.form-addPessoa__btn-add');

// INPUT's
const inputAddNome = document.getElementById('form-addPessoa__input-nome');
const inputAddEmail = document.getElementById('form-addPessoa__input-email');
const inputAddData = document.getElementById('form-addPessoa__input-data');

// EVENTOS
btnAddPessoa.addEventListener('click', () => abrirModal(modalAddPessoa));
btnCadastrar.addEventListener('click', validarDados_cadastro);
botoesCancelar.forEach(botao => {
    botao.addEventListener('click', fecharModais);
});

function abrirModal(modal){
    modal.style.display = 'block';
}

function fecharModais(){
    modalAddPessoa.style.display = 'none';
}

class Pessoa {
    constructor(nome, email, data){
        this.nome = nome;
        this.email = email;
        this.data = data;
    }
}

let listaPessoas;
const lerListaPessoas = () => listaPessoas = JSON.parse(localStorage.getItem('listaPessoas') || '[]');

function validarDados_cadastro(){
    
    let nomeValido = false;
    inputAddNome.value.length < 3 ? alert('O nome da pessoa deve possuir no mínimo 3 caracteres!') : nomeValido = true;
    
    nomeValido ? cadastrar() : console.log('erro');
}

function cadastrar(){
    
    lerListaPessoas();

    let novaPessoa = new Pessoa (inputAddNome.value, inputAddEmail.value, inputAddData.value);
    listaPessoas.push(novaPessoa);
    localStorage.setItem('listaPessoas', JSON.stringify(listaPessoas));

    adicionar_Lista(inputAddNome.value, inputAddEmail.value, inputAddData.value);
}

function adicionar_Lista(nome, email, data){

    const lista__linha = document.createElement('tr');
    const lista__nomePessoa = document.createElement('td');
    const lista__emailPessoa = document.createElement('td');
    const lista__dataPessoa = document.createElement('td');

    lista__linha.appendChild(lista__nomePessoa);
    lista__linha.appendChild(lista__emailPessoa);
    lista__linha.appendChild(lista__dataPessoa);

    lista__body.appendChild(lista__linha);

    lista__nomePessoa.innerHTML = nome;
    lista__emailPessoa.innerHTML = email;
    lista__dataPessoa.innerHTML = data;
}

function carregarCadastros(){

    lerListaPessoas();
    listaPessoas.forEach(pessoa => {
        adicionar_Lista(pessoa.nome, pessoa.email, pessoa.data);
    })
}

carregarCadastros();