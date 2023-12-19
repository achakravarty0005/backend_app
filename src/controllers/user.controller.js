import userService from '../services/user.services'


async function registerUser(req, res) {
    try {
        const response = await userService.registerUser(req, res);
        res.status(200).json(response);
    } catch (error) {
        console.log('Unable to register user: ', error);
    }
}

module.exports = {registerUser};