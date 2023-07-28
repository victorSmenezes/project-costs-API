import { Router } from "express";
import { createProject, getProjects, showCategories } from "./controllers/UserController.js";

const routes = Router()

// Rotas categories

routes.get('/categories', showCategories)


//Rotas Projeto

routes.post('/projects', createProject)
routes.get('/projects', getProjects)
routes.get('/projects/:id', getProjects)

export default routes