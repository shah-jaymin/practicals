const useCase = require('../../use-cases/getUsers/getUsers')

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
}