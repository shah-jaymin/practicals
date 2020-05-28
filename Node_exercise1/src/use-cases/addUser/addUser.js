const dataAccess = require('../../data-access/index');

exports.addUser = async (userDetails) => {
    try {
        const result  = await dataAccess.addUser(userDetails);
        if(result) return result
    } catch (error) {
        return error
    }   
    
}