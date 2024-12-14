const { Router } = require("express");
const { getAlltasks, getSingleTask, deleteTask, createTask, updateTask } = require("../controllers/taskController");

const router = Router();

// Define routes
router.get("/list", getAlltasks);
router.get("/details/:id", getSingleTask);
router.delete("/delete/:id", deleteTask);
router.post("/create", createTask);
router.put("/update/:id", updateTask);


module.exports = router;
