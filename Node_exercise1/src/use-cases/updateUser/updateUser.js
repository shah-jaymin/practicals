const dataAccess = require('../../data-access/index');

exports.updateUser = async (userDetails) => {
    try {
        const result  = await dataAccess.updateUser(userDetails);
        if(result) return result
    } catch (error) {
        return error
    }   
    
}