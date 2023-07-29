import { Router } from "express";
import { createProject, deleteProject, getProjects, getProjectsId, showCategories, updateProject } from "./controllers/UserController.js";

const routes = Router()

// Rotas categories

routes.get('/categories', showCategories)


//Rotas Projeto

routes.post('/projects', createProject)
routes.get('/projects', getProjects)
routes.get('/projects/:id', getProjectsId)
routes.delete('/projects/:id', deleteProject)
routes.patch('/projects/:id', updateProject)

export default routes