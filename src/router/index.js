const { Router } = require("express");

const Projects = [];

const routes = Router();

/**
 * Função para encontrar um projeto através do ID
 * @param {*} projectID chave única do projeto
 * @return {Object}
 */ 
function searchProject(projectID) {
  return Projects.find(T => T.id == projectID);
}

/**
 * Middleware para verificar se existe um projeto 
 * através do req.params ID
 */
function checkProjectExist(req, res, next) {
  const { id } = req.params;
  const project = searchProject(id);

  if (!project) {
    return res.status(400).json({
      error: "Nenhum projeto encontrado"
    });
  }
  next();
}

/**
 * Middleware global para fazer controle de requisições 
 */
function controlAccessUser(req, res, next){
  console.count("Controle de acesso");
  next();
}

/**
 * Use define que as rotas utilizaram o middleware global
 */
routes.use(controlAccessUser);

/**
 * Rota principal do serviço
 * @returns {Object} informando a versão da API
 */
routes.get("/", (req, res) => {
  return res.json({ version: "1.0.0" });
});

/**
 * Lista todos os projetos
 * @returns {Array}
 */
routes.get("/projects", (req, res) => {
  return res.json(Projects);
});

/**
 * Busca um projeto
 * @param {*} id
 * @returns {Object}
 */
routes.get("/projects/:id", checkProjectExist, (req, res) => {
  const { id } = req.params;
  const project = searchProject(id);
  return res.json(project);
});

/**
 * Cadastra um novo projeto
 * @returns {Object} 
 */
routes.post("/projects", (req, res) => {
  const { id, title } = req.body;
  const project = { id, title, tasks: [] };
  Projects.push(project);

  return res.json(project);
});

/**
 * Altera um projeto existente
 * @returns {Object}
 */
routes.put("/projects/:id", checkProjectExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = searchProject(id);
  project.title = title;

  return res.json(project);
});

/**
 * Exclui um projeto existente
 * @returns {String}
 */
routes.delete("/projects/:id", checkProjectExist, (req, res) => {
  const { id } = req.params;
  const index = Projects.findIndex(T => T.id == id);
  Projects.splice(index, 1);

  return res.send("Excluído com sucesso");
});

/**
 * Cadastra tasks em um projeto existente
 * @returns {Object}
 */
routes.post("/projects/:id/tasks", checkProjectExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = searchProject(id);
  project.tasks.push(title);

  return res.json(project);
});

module.exports = routes;
