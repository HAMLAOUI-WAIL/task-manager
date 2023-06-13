import express from "express";
// const express = require('express')
import tasks from "./router/tasks.js";

// if Route does not exist
import { notFound } from "./middleware/not-found.js";
import { errorHandlerMiddlware } from "./middleware/err-handler.js";

import { connectDB } from "./db/connect.js"; 

import dotenv from "dotenv"
dotenv.config()


const app = express() 

app.use(express.json())
app.use(express.static("./public"))
app.use(notFound)
app.use(errorHandlerMiddlware)

app.get("/",(req,res)=>{
  res.send("Task manager APP")
})

app.use("/api/tasks",tasks)


const port = process.env.PORT || 3000
const start = async ()=>{
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port,console.log(`server listening on port ${port}...`))

  }catch(err){
    console.log(err)
  }
}

start()