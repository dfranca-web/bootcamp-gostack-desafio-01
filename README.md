<h1 align="center">
    <img alt="GoStack" src="https://github.com/dfranca-web/bootcamp-gostack-desafio-01/blob/master/src/assets/logo-stronglab.PNG?raw=true" width="200px" />
</h1>

<h3 align="center">
  Desafio 1: Conceitos do NodeJS
</h3>

<p align="center">“O sucesso é a soma de pequenos esforços repetidos dia após dia. (Robert Collier)”!</p>

## Curso iniciado, conteúdo aplicado.

Vamos seguir as dicas da @Rocketseat, pratique e pratique muito, só assim para ganhar confiança e se destacar no desenvolvimento.
Praticando os seguintes conceitos:
- Fluxo de requisição e resposta
- Métodos HTTP (Get, Post, Put, Delete)
- Middlewares


## Rotas

- `GET /`: Retorna a versão da API
- `GET /projects`: Retorna a lista com todos os projetos
- `GET /projects/:id`: Retorna um projeto com base no ID
- `POST /projects`: Responsável pelo cadastro do projeto aceitando no body da requisição o seguinte modelo `{ id: 1, title: 'Novo projeto' }`
- `PUT /projects/:id`: Responsável por fazer a alteração do titulo do projeto
- `DELETE /projects/:id`: Responsável por deletar um projeto existente
- `POST /projects/:id/tasks`: Responsável pelo cadastro das tasks do projeto especificado pelo `:id` na rota

## Middlewares

São metódos responsáveis por interceptar requisições e fazer algum tipo de tratamento como validações, pesquisas, e etc. Podemos ver um metódo que esta sendo utilizado para verificar se um projeto existe.

`function checkProjectExist(req, res, next) {
  const { id } = req.params;
  const project = searchProject(id);

  if (!project) {
    return res.status(400).json({
      error: "Nenhum projeto encontrado"
    });
  }
  next();
}`

<h3 align="center">
    <img alt="GoStack" src="https://github.com/dfranca-web/bootcamp-gostack-desafio-01/blob/master/src/assets/visual-studio-code.PNG?raw=true" />
</h3>

<h3 align="center">
    <img alt="GoStack" src="https://github.com/dfranca-web/bootcamp-gostack-desafio-01/blob/master/src/assets/visual-studio-code-2.PNG?raw=true" />
</h3>

<h3 align="center">
    <img alt="GoStack" src="https://github.com/dfranca-web/bootcamp-gostack-desafio-01/blob/master/src/assets/insomnia.PNG?raw=true" />
</h3>
