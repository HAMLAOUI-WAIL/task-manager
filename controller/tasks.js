import Task from "../models/task.js"
import { asyncWrapper } from "./middleware/async.js";

// use asyncWrapper so try catch does not exist
export const getAllTasks = asyncWrapper (async (req,res)=>{
    const tasks = await Task.find({}) //all object
        // choose one of this
    res.status(200).json({Your_tasks:tasks })
    // res.status(200).json({Your_tasks:tasks , amount:tasks.length})
    // res.status(200).json({ success:true , data:{tasks ,amount:tasks.length} })
})

export const getTask = async (req,res)=>{
    try{
        const {id:taskId} = req.params
        const task = await Task.findOne({_id:taskId})

        if(!task){
            res.status(404).json({message:`No task with id : ${taskId}`})
        }

        res.status(200).json({task})

    }catch(err){
        res.status(500).json({message:err})
    }
}

export const CreateTask = async (req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(err){
        res.status(500).json({message:err})
    }
    
}

// export const CreateTask = async (req, res) => {
//     const task = await Task.create(req.body)
//     res.status(201).json({ task })
// }

export const DeleteTask = async (req,res)=>{
    try{
        const {id:TaskID} = req.params
        const task = await Task.findOneAndDelete({_id: TaskID})
        
        // if item not exist
        if(!task){
            res.status(404).json({message:`No task with id : ${TaskID}`})
        }

        res.status(200).json({task})

    }catch(err){
        res.status(500).json({message:err})
    }
}


// use patch Method
export const UpdateTask = async (req,res)=>{
    try{
        const {id:TaskID} = req.params
        const task = await Task.findOneAndUpdate({_id: TaskID}, req.body,{
            new:true,
            runValidators:true,
        })
        
        if(!task){
            res.status(404).json({message:`No task with id : ${TaskID}`})
        }

        res.status(200).json({task})

    }catch(err){
        res.status(500).json({message:err})
    }
}


// use put method
export const editTask = async(req,res)=>{
    try{
        const {id:TaskID} = req.params
        const task = await Task.findOneAndUpdate({_id: TaskID}, req.body,{
            new:true,
            runValidators:true,
            overwrite:true,
        })
        
        if(!task){
            res.status(404).json({message:`No task with id : ${TaskID}`})
        }

        res.status(200).json({task})

    }catch(err){
        res.status(500).json({message:err})
    }
}