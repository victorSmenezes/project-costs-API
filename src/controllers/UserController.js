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

async function getProjectsId(request, response) {
  const Idproject = request.params.id

  const project = await Project.findOne({ id: Idproject })

  return response.status(200).json({ project });
}

async function deleteProject(request, response) {
  const Idproject = request.params.id

  await Project.findOneAndDelete({ id: Idproject })

  return response.status(201).json({ response: "Project Deleted" })
}

async function updateProject(request, response) {
  const Idproject = request.params.id

  const { name, budget, category, cost, services } = request.body

  await Project.findOneAndUpdate({ id: Idproject }, {
    name,
    budget,
    category,
    cost,
    services,
  })

  return response.status(201).json({ response: "Project Updated" })
}

export { showCategories, createProject, getProjects, getProjectsId, deleteProject, updateProject }