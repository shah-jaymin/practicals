const useCase = require('../../use-cases/getUser/getUser')

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
}