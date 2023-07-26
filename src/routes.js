import { Router } from "express";
import { showCategories } from "./controllers/UserController.js";

const routes = Router()

// Rotas categories

routes.get('/categories', showCategories)

export default routes