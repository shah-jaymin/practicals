/*const useCase = require('../../use-cases/deleteUser/deleteUser')

exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await useCase.deleteUser({ id });
        if (result) {
            return res.json({
                message: 'Deleted Successfully!'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error!'
        })
    }
}*/

module.exports = function makeDeleteUserAction({deleteUser}) {
    return async function deleteUserAction(req, res) {
        try {
            const id = req.params.id;
            const result = await deleteUser.deleteUser({ id });
            console.log(result);
            if (result) {
                return res.json({
                    message: 'Deleted Successfully'
                });
            }
        } catch(error) {
            console.log(error);
            return res.status(500).json({
                message: 'Error!'
            })
        }
    }
}