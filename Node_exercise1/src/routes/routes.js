/*const getUser = require('../controllers/user/getUser');
const deleteUser = require('../controllers/user/deleteUser');
const getUsers = require('../controllers/user/getUsers');
const addUser = require('../controllers/user/addUser');
const updateUser = require('../controllers/user/updateUser');*/

const controllers = require('../controllers/index');

module.exports = (app) => {
    app.route('/users/:id')
        // .get(getUser.getUser)
        .get(controllers.getUserAction)
        // .delete(deleteUser.deleteUser)
        .delete(controllers.deleteUserAction)
    app.route('/users')
        //.get(getUsers.getUsers)
        .get(controllers.getUsersAction)
        // .post(addUser.addUser)
        .post(controllers.addUserAction)
        //.put(updateUser.updateUser)
        .put(controllers.updateUserAction)
}