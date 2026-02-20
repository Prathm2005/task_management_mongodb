const Task = require("../models/task_model.js");


exports.createTask=async(req,res)=>{
    try {
        const task= await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.getTask=async(req,res)=>{
    try {
        const task= await Task.find();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.getTaskId=async(req,res)=>{
    try {
        const task= await Task.findById(req.params.id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.updateTask=async(req,res)=>{
    try {
        const task= await Task.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.deleteTask=async(req,res)=>{
    try {
        const task= await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Succesfully Deleted"});
    } catch (error) {
        res.status(500).json(error.message);
    }
};

