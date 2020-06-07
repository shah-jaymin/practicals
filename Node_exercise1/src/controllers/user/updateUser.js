/*const useCase = require('../../use-cases/updateUser/updateUser')

exports.updateUser = async (req, res) => {
    const name = req.body.Name;
    const age = req.body.Age;
    const userCode = req.body.UserCode;
    const id = req.body.UserID;
    try {
        const result = await useCase.updateUser({ name, age, userCode, id });
        if (result) {
            return res.json({
                message: 'Updated Successfully!'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error!'
        })
    }
}*/

module.exports = function makeUpdateUserAction({updateUser}) {
    return async function updateUserAction(req, res) {
        try {
            const name = req.body.Name;
            const age = req.body.Age;
            const userCode = req.body.UserCode;
            const id = req.body.UserID;
            const result = await updateUser.updateUser({ name, age, userCode, id });
            console.log(result);
            if (result) {
                return res.json({
                    message: 'Updated Successfully!'
                });
            }
        } catch(error) {
            console.log(error);
            return res.status(500).json({
                message: 'Error'
            })
        }
    }
}