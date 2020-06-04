const useCases = require('../use-cases');

const makeAddUserAction = require('./user/addUser');
const addUserAction = makeAddUserAction({
    addUser: useCases,
});

const controller = Object.freeze({
    addUserAction,
});

module.exports = controller;