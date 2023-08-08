<h1 align="center">Project Costs API</h1>

## <p>Backend do project costs</p>
<p>Desenvolvido com ExpressJS, essa API foi projetada para suprir as funcionalidades do <b>Project Costs - Front End</b>, conectado ao banco de dados MongoDB e seguindo o padrão MVC, afim de organizar o 
  código de forma mais modular, facilitando a manutenção, a escalabilidade.</p>
  
<p>O projeto conta com funcionalidade CRUD.</p>

## Funcionalidades
 
> Criar Novo Projeto

> Edição do Projeto

> Exclusão de Projeto

#

> Adicione serviços ao projeto

> Delete serviços 

## Rotas

`POST /projects` Essa rota cria um novo projeto, ao qual já é adicionado ao banco de dados. É criado um id para o projeto, junto do nome, orçamento e categoria fornecidos pelo usuário;

`GET /projects` Esta rota mostra todos os projetos criados;

`GET /projects/:id` Esta rota é responsável por mostrar em detalhes um projeto;

`DELETE /projects/:id` Rota responsável por deletar um projeto;

`PATCH /projects/:id` Rota direcionada a editar algo no projeto, como seu orçamento, categoria... Responsável também por criar/deletar serviços;

## 🔖 Deploy

> [Project Costs API](https://project-costs-api.vercel.app/)


## 🚀 Tecnologias e Ferramentas

Este projeto foi desenvolvido usando as seguintes tecnologias e ferramentas:

- NodeJS
- ExpressJS
- Mongoose
- Nodemon
- Cors

- Insomnia, para testar as rotas.


### Banco de Dados

- MongoDB


# Começando 🤖
Como rodar

Para clonar e executar este aplicativo, você precisará de Git e Node.js (que vem com npm) instalado em seu computador. Na sua linha de comando:

## Clone este repositório
```bash
$ git clone https://github.com/victorSmenezes/project-costs-API.git

# Acesse a pasta do projeto
$ cd project-costs-API

# Instale as dependências
$ npm install 
# or
$ yarn add install
```

## Execute o projeto 📎 
```bash
$ npm run dev
# or
$ yarn dev
# or
$ pnpm dev
```

Abra [http://localhost:4340](http://localhost:4340) no seu navegador e veja o projeto rodando.

