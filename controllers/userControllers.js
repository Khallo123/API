let users = [
    {
        id : 1,
        username : 'Khaalid',
        address : 'Burco',
        email :'khallo@gmail.com',
        phonenumber : '4235747'
    }
]
// Get All Users
const getAllUsers = (req, res) => {
    res.json({
        isSuccess : true,
        users
    })
}

// Get Single User
const getSingleUser = (req, res) => {
    const {userId} = req.params

    const user = users.find((user) => user.id === +userId)

    if(!user) {
        res.status(400).json({
            isSuccess : false,
            message : "User is not found!",
        })

        return
    }

    res.json({
        isSuccess : true,
        user
    })
}

// Create New User
const createNewUser = (req, res) => {
    const data = req.body 
    const id = users.length +1
    data.id = id

    users.push(data)

    res.status(201).json({
        isSuccess : true, 
        message : "User Successfully created!",
        data
    })
}

// Delete User
const deleteUser = (req, res) => {
    const {userId} = req.params

    users = users.filter(user => user.id !== +userId)

    res.json({
        isSuccess : true,
        message : "Successfully deleted"
    })
}

// Upsate User
const updateUser = (req, res) => {
    const { userId } = req.params; 
    const updatedData = req.body; 


    const userIndex = users.findIndex(user => user.id === +userId);

    if (userIndex === -1) {
        res.status(404).json({
            isSuccess: false,
            message: "User not found!",
        });
        return;
    }

  
    users[userIndex] = {
        ...users[userIndex],
        ...updatedData,
    };

    res.json({
        isSuccess: true,
        message: "User successfully updated!",
        updatedUser: users[userIndex],
    });
};


module.exports = {
    getAllUsers,
    getSingleUser,
    createNewUser,
    deleteUser,
    updateUser
}