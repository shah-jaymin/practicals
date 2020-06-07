const userDb = require('../data-access/index');

const makeAddUser = require('./addUser/addUser');
const addUser = makeAddUser({dataAccess: userDb});
const makeDeleteUser = require('./deleteUser/deleteUser');
const deleteUser = makeDeleteUser({dataAccess: userDb});
const makeGetUser = require('./getUser/getUser');
const getUser = makeGetUser({dataAccess: userDb});
const makeGetUsers = require('./getUsers/getUsers');
const getUsers = makeGetUsers({dataAccess: userDb});
const makeUpdateUser = require('./updateUser/updateUser');
const updateUser = makeUpdateUser({dataAccess: userDb});

module.exports = {
    addUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser
};