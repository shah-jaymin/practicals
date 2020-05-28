const dataAccess = require('../../data-access/index');

exports.deleteUser = async (userDetails) => {
    try {
        const result  = await dataAccess.deleteUser(userDetails);
        if(result) return result
    } catch (error) {
        return error
    }   
    
}