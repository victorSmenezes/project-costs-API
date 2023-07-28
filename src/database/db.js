import mongoose from "mongoose";

export default async function connectDatabase() {
  await mongoose.connect("mongodb+srv://victorsantos:khrCBbsn06nSwDRe@cluster1.7zxurm0.mongodb.net/?retryWrites=true&w=majority")
}