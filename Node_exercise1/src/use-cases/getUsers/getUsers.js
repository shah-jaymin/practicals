const dataAccess = require('../../data-access/index');

exports.getUsers = async () => {
    try {
        const result  = await dataAccess.getUsers();
        if(result) return result
    } catch (error) {
        return error
    }   
    
}