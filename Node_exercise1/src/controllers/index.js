const useCases = require('../use-cases');

const makeAddUserAction = require('./user/addUser');
const makeDeleteUserAction = require('./user/deleteUser');
const makeGetUserAction = require('./user/getUser');
const makeGetUsersAction = require('./user/getUsers');
const makeUpdateUserAction = require('./user/updateUser');

const addUserAction = makeAddUserAction({
    addUser: useCases
});

const deleteUserAction = makeDeleteUserAction({
    deleteUser: useCases
});

const getUserAction = makeGetUserAction({
    getUser: useCases
});

const getUsersAction = makeGetUsersAction({
    getUsers: useCases
});

const updateUserAction = makeUpdateUserAction({
    updateUser: useCases
});

const controller = Object.freeze({
    addUserAction,
    deleteUserAction,
    getUserAction,
    getUsersAction,
    updateUserAction
});

module.exports = controller;