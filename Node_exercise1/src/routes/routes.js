const getUser = require('../controllers/user/getUser');
const deleteUser = require('../controllers/user/deleteUser');
const getUsers = require('../controllers/user/getUsers');
const addUser = require('../controllers/user/addUser');
const updateUser = require('../controllers/user/updateUser');

module.exports = (app) => {
    app.route('/users/:id')
        .get(getUser.getUser)
        .delete(deleteUser.deleteUser)
    app.route('/users')
        .get(getUsers.getUsers)
        .post(addUser.addUser)
        .put(updateUser.updateUser)
}