import express from "express";
import cors from 'cors';
import routes from "./routes.js";
import connectDatabase from "./database/db.js";



const app = express()

app.use(express.json())

app.use(cors())

app.use(routes)

const port = process.env.PORT || 4340;

connectDatabase()
  .then(() => {
app.listen(port, () => console.log('API on'))
})
  .catch((err) => console.error(err))