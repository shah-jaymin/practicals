/*const useCase = require('../../use-cases/getUser/getUser')

exports.getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await useCase.getUser({ id });
        if (result) {
            return res.send(result);
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error!'
        })
    }
}*/

module.exports = function makeGetUserAction({getUser}) {
    return async function getUserAction(req, res) {
        try {
            const id = req.params.id;
            const result = await getUser.getUser({ id });
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