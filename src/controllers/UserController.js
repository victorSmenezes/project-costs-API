const projects = []

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

async function showCategories(request, response) {
  console.log(request.body)
  response.status(200).json(categories)
}

export { showCategories }