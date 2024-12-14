let idCounter  
let tasks = [
    {
        id: 1,
        name: "go to work",
        description: "Go at 8 Am in the morning",
        dueDate: "2024-12-13",
        status: "completed"
    },
    {
        id: 2,
        name: "go to market",
        description: "Go buy some clothes",
        dueDate: "2024-12-15",
        status: "pending"
    },
    {
        id: 3,
        name: "go to college",
        description: "Go at 11 Am in the morning",
        dueDate: "2024-12-15",
        status: "pending"
    }
];

// Get all tasks
const getAlltasks = (req, res) => {
    res.status(200).json({
        isSuccess: true,
        message: "All tasks are being displayed!",
        tasks: tasks
    });
};

// Get a single task
const getSingleTask = (req, res) => {
    const taskId = parseInt(req.params.id);

    const targetTask = tasks.find(t => t.id === taskId);

    if (!targetTask) {
        return res.status(404).json({
            isSuccess: false,
            message: `The task with id:${taskId} is not found!`
        });
    }

    return res.status(200).json({
        isSuccess: true,
        message: `The task with id:${taskId} has been found.`,
        task: targetTask
    });
};

// Delete a task by ID
const deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);

    const isTaskExist = tasks.some(t => t.id === taskId);

    if (!isTaskExist) {
        return res.status(404).json({
            isSuccess: false,
            message: `The task with id:${taskId} is not found`
        });
    }

    tasks = tasks.filter(t => t.id !== taskId);

    return res.status(200).json({
        isSuccess: true,
        message: `The task with id:${taskId} has been deleted successfully`,
        tasks: tasks
    });
};

// Create a task
const createTask = (req, res) => {
    const { name, description, dueDate, status } = req.body;

    if (!name || !description || !dueDate || !status) {
        return res.status(400).json({
            isSuccess: false,
            message: "All fields (name, description, dueDate, status) are required!"
        });
    }

    const validStatus = ["completed", "pending", "in-progress"];
    if (!validStatus.includes(status)) {
        return res.status(400).json({
            isSuccess: false,
            message: "The status must be one of: 'completed', 'pending', 'in-progress'"
        });
    }

    idCounter += 1;
    const newTask = {
        id: idCounter,
        name,
        description,
        dueDate,
        status
    };

    tasks.push(newTask);

    return res.status(201).json({
        isSuccess: true,
        message: "New task added successfully!",
        task: newTask,
        tasks
    });
};

// Update tasks
const updateTask = (req, res) => {
    const taskId = parseInt(req.params.id)
    const updates = req.body

    const targetTask = tasks.find(t => t.id === taskId)

    if(!targetTask) {
        res.status(404).json({
            isSuccess: false,
            message: `The task with the id:${taskId} is not found!`
        })
    }

    const validStatus = ["completed", "pending", "in-progress"];
    if (!validStatus.includes(updates.status)) {
        return res.status(400).json({
            isSuccess: false,
            message: "The status must be one of: 'completed', 'pending', 'in-progress'"
        });
    }

    tasks = tasks.map(task => task.id === taskId ? {...task, ...updates} : task)

    return res.status(200).json({
        isSuccess: true,
        message: `The task with the id:${taskId} is updated successfully`,
        task: tasks
    })
}

module.exports = { 
     getAlltasks,
     getSingleTask,
     deleteTask,
     createTask,
     updateTask
 };