import Project from "../models/Project.js"

const categories = [
  {
    "id": 1,
    "name": "Infra"
  },
  {
    "id": 2,
    "name": "Desenvolvimento"
  },
  {
    "id": 3,
    "name": "Design"
  },
  {
    "id": 4,
    "name": "Planejamento"
  }
]

function showCategories(request, response) {
  response.status(200).json(categories)
  console.log(request)
}

async function createProject(request, response) {
  const project = request.body

  const newProject = await Project.create(project)

  return response.status(201).json(newProject)
}

async function getProjects(request, response) {
  const project = await Project.find()

  return response.status(200).json(project)
}

export { showCategories, createProject, getProjects }