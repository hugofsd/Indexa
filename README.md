# Indexa - Gerenciador de Contatos

Indexa é uma aplicação web para gerenciamento de contatos, permitindo que os usuários salvem, visualizem, editem e excluam informações de contato.

## Sobre o Projeto

Este projeto foi desenvolvido como um exemplo de uma aplicação full-stack, utilizando Angular para o frontend e `json-server` para simular um backend RESTful. A aplicação permite a criação, leitura, atualização e exclusão (CRUD) de contatos.

## Tecnologias Utilizadas

### Frontend
- **Angular 19.2.0:** Um framework de desenvolvimento de aplicações web baseado em TypeScript.
- **TypeScript:** Um superconjunto de JavaScript que adiciona tipagem estática opcional.
- **RxJS:** Uma biblioteca para programação reativa usando Observables.
- **HTML5 & CSS3:** Para a estrutura e estilização das páginas.

### Backend
- **json-server:** Uma ferramenta que permite criar um backend RESTful falso para prototipagem e desenvolvimento rápido, utilizando um arquivo `db.json` como banco de dados.
- **Express:** Um framework para aplicações web em Node.js, utilizado pelo `json-server`.

## Primeiros Passos

Para executar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

- **Node.js e npm:** Certifique-se de ter o Node.js e o npm instalados em sua máquina. Você pode baixá-los em [nodejs.org](https://nodejs.org/).

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/indexa.git
   cd indexa
   ```

2. **Instale as dependências do frontend:**
   ```bash
   npm install
   ```

3. **Instale as dependências do backend:**
   ```bash
   cd backend
   npm install
   cd ..
   ```

### Executando a Aplicação

1. **Inicie o backend:**
   Em um terminal, navegue até a pasta `backend` e execute o seguinte comando para iniciar o `json-server`:
   ```bash
   npm start
   ```
   O servidor da API estará disponível em `http://localhost:3000`.

2. **Inicie o frontend:**
   Em outro terminal, na raiz do projeto, execute o seguinte comando para iniciar o servidor de desenvolvimento do Angular:
   ```bash
   ng serve
   ```
   A aplicação estará disponível em `http://localhost:4200`.

## Funcionalidades

- **Listagem de Contatos:** Visualize todos os contatos em uma lista organizada.
- **Adicionar Novo Contato:** Crie e salve novos contatos através de um formulário.
- **Visualizar Detalhes do Contato:** Clique em um contato para ver suas informações detalhadas.
- **Editar Contato:** Modifique as informações de um contato existente.
- **Excluir Contato:** Remova um contato da lista.