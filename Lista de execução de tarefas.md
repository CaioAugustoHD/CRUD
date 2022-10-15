# Lista de execução de tarefas do projeto

## CRUD
- [x] Criar lista (nome, email, data de nascimento)

### CADASTRAR
- [x] Criar modal para cadastrar pessoa
- [x] Abrir e fechar modal com botão
- [x] Criar classe e declarar variáveis para função de cadastro
- [x] Antes de cadastrar, Validar os dados
    - [x] Nome com mais de 3 caracteres
    - [x] Se o email é válido e ainda não foi cadastrado
    - [x] Data válida
- [x] Criar função de cadastrar pessoa
- [x] Adicioná-la no localStorage
- [x] Adicioná-la na lista ao cadastrar

### VISUALIZAR
- [x] Função para gerar a lista de pessoas
- [x] Carregar na lista as pessoas já cadastradas ao sair ou recarregar a página

### EDITAR
- [x] Criar na lista uma coluna para os botões de editar e excluir
- [x] Criar modal para editar pessoa
- [x] Função para abrir e fechar modal de editar com botão
- [x] Criar função para editar dados de uma pessoa
    - [x] Ao abrir o modal, mostrar nos inputs os dados da pessoa para editar
- [x] Validar os dados antes de salvar as alterações
    - [x] Nome com mais de 3 caracteres
    - [x] Se o email alterado ainda não foi cadastrado
    - [x] Data válida
- [x] Salvar no localStorage
- [x] Atualizar na lista

### EXCLUIR
- [x] Criar botão para excluir pessoa
    - [x] Criar modal de confirmação de exclusão
    - [x] Abrir modal de confirmação para confirmar remoção

## ESTILIZAÇÃO
- [x] Definir layout página
    - [x] Estrutura lista
    - [x] Estrutura modais
- [x] Mensagem de erro estilizada
    - [x] Mensagem de erro desaparecer após input voltar a receber o foco
- [x] Animação nos inputs
- [x] Estilizar inputs
- [x] Estilizar botões
    - [x] Botões da lista
    - [x] Outros botões
- [x] Estilizar modais
- [x] Deixar modais responsivos
- [x] Estilizar lista
- [x] Deixar lista responsiva
- [x] Definir cores
- [x] Efeito hover nos botões
- [x] Animação nas mensagens de erro
- [x] Animação nos modais
- [x] Transição nos botões

## OUTRAS FUNCIONALIDADES

- [x] Ocultar lista caso ela esteja vazia
- [x] Definir máximo de caracteres para input
- [x] Barra de scroll na lista quando estiver muito grande