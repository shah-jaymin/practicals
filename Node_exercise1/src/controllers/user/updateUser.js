const useCase = require('../../use-cases/updateUser/updateUser')

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
}