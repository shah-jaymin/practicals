/*const dataAccess = require('../../data-access/index');

exports.getUsers = async () => {
    try {
        const result  = await dataAccess.getUsers();
        if(result) return result
    } catch (error) {
        return error
    }   
    
}*/

module.exports = function makeGetUsers({dataAccess}) {
    return async function getUsers(userDetails) {
        try {
            const result = await dataAccess.getUsers(userDetails);
            if(result) return result;
        } catch (error) {
            return error;
        }
    }
};