const users = [
    {
        id : 1,
        username : 'Khaalid',
        address : 'Hargeysa',
        email : 'Khallo44@gmail.com',
        phonenumber : '456231243456'
    }
]
// getAllUsers
const getAllUsers = (req, res) => {
    res.json({
        isSuccess : true,
        users
    })
}

// getSingleUser
const getSingleUser = (req, res) => {
    const {userId} = req.params

    const user = users.find((user) => user.id === +userId)

    if(!user) {
        res.status(400).json({
            isSuccess : false,
            message : "User not found!"
        })

        return
    }

    res.json({
        isSuccess : true,
        user
    })
}

// createNewUser
const createNewUser = (req, res) => {
    const data = req.body
    const id = users.length +1
    data.id = id
    
    users.push(data)

    res.status(201).json({
        isSuccess : true,
        message : "Successfully created!",
        data
    })
}


module.exports = {
    getAllUsers,
    getSingleUser,
    createNewUser
}