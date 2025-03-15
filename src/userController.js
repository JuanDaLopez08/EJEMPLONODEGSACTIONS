const userService = require('./userService')

const getUsers = (req, res) => {
    res.json(userService.getUsers())
}

module.exports = {getUsers}