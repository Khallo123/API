const users = [
    {
        id : 1,
        username : 'Khaalid',
        email : 'khaalid123@gmail.com',
        address : 'Hergaysa',
        phonenumber : '4562453'
    },
    {
        id : 2,
        username : 'Cumar',
        email : 'cumar123@gmail.com',
        address : 'Hergaysa',
        phonenumber : '213456'
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

    const user = users.find((user) => user.id === userId)

    if(!user){
        res.status(400).json({
            isSucces : false,
            message : 'User not found!'
        })

        return
    }

    res.json({
        isSucces : true,
        users    
    })
}

module.exports = {
    getAllUsers,
    getSingleUser
}