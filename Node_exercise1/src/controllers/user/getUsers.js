/*const useCase = require('../../use-cases/getUsers/getUsers')

exports.getUsers = async (req, res) => {
    try {
        const result = await useCase.getUsers();
        if (result) {
            return res.send(result);
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error!'
        })
    }
}*/

module.exports = function makeGetUsersAction({getUsers}) {
    return async function getUsersAction(req, res) {
        try {
            const result = await getUsers.getUsers();
            console.log(result);
            if (result) {
                return res.send(result);
            }
        } catch(error) {
            console.log(error);
            return res.status(500).json({
                message: 'Error!'
            })
        }
    }
}