const useCase = require('../../use-cases/addUser/addUser')

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
}