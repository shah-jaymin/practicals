/*const getUser = require('../controllers/user/getUser');
const deleteUser = require('../controllers/user/deleteUser');
const getUsers = require('../controllers/user/getUsers');
const addUser = require('../controllers/user/addUser');
const updateUser = require('../controllers/user/updateUser');*/

const controllers = require('../controllers/index');

module.exports = (app) => {
    app.route('/users/:id')
        // .get(getUser.getUser)
        // .delete(deleteUser.deleteUser)
    app.route('/users')
        //.get(getUsers.getUsers)
        // .post(addUser.addUser)
        .post(controllers.addUserAction)
        //.put(updateUser.updateUser)
}