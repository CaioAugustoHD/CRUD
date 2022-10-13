const lista = document.querySelector('.lista-pessoas');
const lista__body = document.querySelector('.lista-pessoas__body');

const botoesCancelar = document.querySelectorAll('.botoes-cancelar');

const modalRemoverPessoa = document.querySelector('.modal-removerPessoa');
const btnRemoverPessoa = document.querySelector('.modal-removerPessoa__btn-remover');
const modalEditPessoa = document.querySelector('.modal-editPessoa');
const btnEditPessoa = document.querySelector('.form-editPessoa__btn-edit')
const modalAddPessoa = document.querySelector('.modal-addPessoa');
const btnAddPessoa = document.querySelector('.btn-addPessoa');
const btnCadastrar = document.querySelector('.form-addPessoa__btn-add');

// INPUT's
const inputAddNome = document.getElementById('form-addPessoa__input-nome');
const inputAddEmail = document.getElementById('form-addPessoa__input-email');
const inputAddData = document.getElementById('form-addPessoa__input-data');
const inputEditNome = document.getElementById('form-editPessoa__input-nome');
const inputEditEmail = document.getElementById('form-editPessoa__input-email');
const inputEditData = document.getElementById('form-editPessoa__input-data');

// EVENTOS
btnAddPessoa.addEventListener('click', () => abrirModal(modalAddPessoa));
btnCadastrar.addEventListener('click', () => validarDados('cadastrar', inputAddNome, inputAddEmail, inputAddData));
btnEditPessoa.addEventListener('click', () => validarDados('editar', inputEditNome, inputEditEmail, inputEditData));
btnRemoverPessoa.addEventListener('click', () => removerPessoa());
botoesCancelar.forEach(botao => {
    botao.addEventListener('click', fecharModais);
});

let pessoaSelecionada
let pessoaSelecionada_index

function abrirModal(modal){
    modal.style.display = 'block';
}

function fecharModais(){
    modalAddPessoa.style.display = 'none';
    modalEditPessoa.style.display = 'none';
    modalRemoverPessoa.style.display = 'none';

    inputAddNome.value = '';
    inputAddEmail.value = '';
    inputAddData.value = '';
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

function validarDados(acao, inputNome, inputEmail, inputData){

    let funcao = acao;
    let nomeValido = false;
    inputNome.value.length < 3 ? alert('O nome da pessoa deve possuir no mínimo 3 caracteres!') : nomeValido = true;
    
    !nomeValido ? console.log('erro') : 
        funcao == 'cadastrar' ? cadastrar() : editarPessoa();
            
}

function cadastrar(){
    
    lerListaPessoas();

    let novaPessoa = new Pessoa (inputAddNome.value, inputAddEmail.value, inputAddData.value);
    listaPessoas.push(novaPessoa);
    localStorage.setItem('listaPessoas', JSON.stringify(listaPessoas));

    adicionar_Lista(inputAddNome.value, inputAddEmail.value, inputAddData.value);

    fecharModais();
}

function adicionar_Lista(nome, email, data){

    const lista__linha = document.createElement('tr');
    const lista__nomePessoa = document.createElement('td');
    const lista__emailPessoa = document.createElement('td');
    const lista__dataPessoa = document.createElement('td');
    const lista__acoes = document.createElement('td');

    lista__linha.appendChild(lista__nomePessoa);
    lista__linha.appendChild(lista__emailPessoa);
    lista__linha.appendChild(lista__dataPessoa);
    lista__linha.appendChild(lista__acoes);

    lista__acoes.className = 'lista-pessoas__content-btn';

    lista__body.appendChild(lista__linha);

    lista__nomePessoa.innerHTML = nome;
    lista__emailPessoa.innerHTML = email;
    lista__dataPessoa.innerHTML = data;

    const btnEditar = document.createElement('button');
    btnEditar.className = "lista-pessoas__btn-editPessoa"
    btnEditar.addEventListener('click', () => {
        abrirModal(modalEditPessoa);
        capturarDados();
    });

    const btnRemover = document.createElement('button');
    btnRemover.className = "lista-pessoas__btn-removerPessoa"
    btnRemover.addEventListener('click', () => {
        capturarDados();
        msgRemoverPessoa();
        abrirModal(modalRemoverPessoa);
    });

    lista__acoes.appendChild(btnEditar);
    lista__acoes.appendChild(btnRemover);
}

function capturarDados(){

    pessoaSelecionada = event.target.parentElement.parentElement;
    let pessoaSelecionada_email = pessoaSelecionada.children[1].textContent;
    
    lerListaPessoas();
    listaPessoas.forEach((pessoa, index) => {
        if (pessoaSelecionada_email == pessoa.email){
            pessoaSelecionada_index = index;

            inputEditNome.value = pessoa.nome;
            inputEditEmail.value = pessoa.email;
            inputEditData.value = pessoa.data;
        }
    });
}

function editarPessoa(){
    
    let pessoaEditada = {
        nome: inputEditNome.value,
        email: inputEditEmail.value,
        data: inputEditData.value
    }

    listaPessoas[pessoaSelecionada_index] = pessoaEditada;
    localStorage.setItem('listaPessoas', JSON.stringify(listaPessoas));

    pessoaSelecionada.children[0].innerHTML = pessoaEditada.nome;
    pessoaSelecionada.children[1].innerHTML = pessoaEditada.email;
    pessoaSelecionada.children[2].innerHTML = pessoaEditada.data;

    fecharModais();
}

function msgRemoverPessoa(){
    let mensagem = document.querySelector('.modal-removerPessoa__mensagem');
    mensagem.innerHTML = `Deseja mesmo remover ${listaPessoas[pessoaSelecionada_index].nome}`;
}

function removerPessoa(){

    listaPessoas.splice(pessoaSelecionada_index, 1);
    localStorage.setItem('listaPessoas', JSON.stringify(listaPessoas));

    pessoaSelecionada.remove();
    fecharModais();

}

function carregarCadastros(){

    lerListaPessoas();
    listaPessoas.forEach(pessoa => {
        adicionar_Lista(pessoa.nome, pessoa.email, pessoa.data);
    })
}

carregarCadastros();