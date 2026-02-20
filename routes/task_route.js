const express= require("express");
const router= express.Router();

const {createTask,getTask,getTaskId,updateTask,deleteTask}= require("../controllers/task_controller.js")

router.post("/",createTask);
router.get("/",getTask);
router.get("/:id",getTaskId);
router.put("/:id",updateTask);
router.delete("/:id",deleteTask);

module.exports=router;