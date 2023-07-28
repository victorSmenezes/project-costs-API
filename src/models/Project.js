import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  budget: {
    type: String, 
    require: true,
  },
  category: [{
    id: Number,
    name: String
  }],
  cost: {
    type: Number,
    require: false
  },
  services: [
    {
      name: String,
      cost: Number,
      description: String,
      id: String
    }],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model("Project", projectSchema)