/*const useCase = require('../../use-cases/addUser/addUser')

exports.addUser = async (req, res) => {
    const name = req.body.Name;
    const age = req.body.Age;
    const userCode = req.body.UserCode;
    try {
        const result = await useCase.addUser({ name, age, userCode });
        if (result) {
            return res.json({
                message: 'User Added Successfully'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: 'User Not Added'
        })
    }
}*/

module.exports = function makeAddUserAction({addUser}) {
    return async function addUserAction(req, res) {
        try {
            const name = req.body.Name;
            const age = req.body.Age;
            const userCode = req.body.UserCode;
            const result = await addUser.addUser({ name, age, userCode });
            console.log(result);
            if (result) {
                return res.json({
                    message: 'User Added Successfully'
                });
            }
        } catch(error) {
            console.log(error);
            return res.status(500).json({
                message: 'User Not Added'
            })
        }
    }
}