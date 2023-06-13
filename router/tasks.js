import express from "express";
import { getAllTasks,DeleteTask,UpdateTask,getTask,CreateTask,editTask } from "../controller/tasks.js";

const router = express.Router()

router.route("/").get(getAllTasks).post(CreateTask)
router.route("/:id").get(getTask).patch(UpdateTask).delete(DeleteTask).put(editTask)

export default router;