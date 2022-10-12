const lista = document.querySelector('.lista-pessoas');

const botoesCancelar = document.querySelectorAll('.botoes-cancelar');

const btnAddPessoa = document.querySelector('.btn-addPessoa');
const modalAddPessoa = document.querySelector('.modal-addPessoa');

btnAddPessoa.addEventListener('click', () => abrirModal(modalAddPessoa));
botoesCancelar.forEach(botao => {
    botao.addEventListener('click', fecharModais);
});

function abrirModal(modal){
    modal.style.display = 'block';
}

function fecharModais(){
    modalAddPessoa.style.display = 'none';
}