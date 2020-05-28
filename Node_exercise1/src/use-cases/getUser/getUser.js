const dataAccess = require('../../data-access/index');

exports.getUser = async (userDetails) => {
    try {
        const result  = await dataAccess.getUser(userDetails);
        if(result) return result
    } catch (error) {
        return error
    }   
    
}