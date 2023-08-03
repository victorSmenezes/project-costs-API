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

function ApiON(request, response) {
  try {
    return response.json("hello world");
  }
  catch (error) {
    response.status(500).json("Failed API")
  }
}

function showCategories(request, response) {
  try {
    response.status(200).json(categories)
  }
  catch (error) {
    response.status(500).json({ error: "Failed to get categories" })
  }
}

async function createProject(request, response) {
  const project = request.body

  try {
    const newProject = await Project.create(project)


    return response.status(201).json(newProject)
  }
  catch (error) {
    return response.status(500).json({ error: "Failed to criate a new project" })
  }
}

async function getProjects(request, response) {
  try {
    const project = await Project.find()

    if (!project) {
      return response.status(404).json({ error: "Projects not found" });
    }

    return response.status(200).json(project)
  }
  catch (error) {
    response.status(500).json({ error: "Failed to get projects" })
  }
}

async function getProjectsId(request, response) {
  const Idproject = request.params.id

  try {
    const project = await Project.findOne({ id: Idproject })

    if (!project) {
      return response.status(404).json({ error: "Project not found" });
    }

    return response.status(200).json({ project });
  }
  catch (error) {
    return response.status(500).json({ error: "Falied to get project" })
  }

}

async function deleteProject(request, response) {
  const Idproject = request.params.id

  try {
    await Project.findOneAndDelete({ id: Idproject })

    return response.status(201).json({ response: "Project Deleted" })
  }
  catch (error) {
    return response.status(500).json({ error: "Error to delete project" })
  }
}

async function updateProject(request, response) {
  const Idproject = request.params.id

  try {
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
  catch (error) {
    return response.status(500).json({ error: "Failed to update project" })
  }
}

export { showCategories, createProject, getProjects, getProjectsId, deleteProject, updateProject, ApiON }