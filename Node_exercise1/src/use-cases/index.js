const userDb = require('../data-access/index');

const makeAddUser = require('./addUser/addUser');
const addUser = makeAddUser({dataAccess: userDb});

module.exports = {
    addUser,
};