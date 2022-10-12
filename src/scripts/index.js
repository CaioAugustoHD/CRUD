const lista = document.querySelector('.lista-pessoas');

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
    
}