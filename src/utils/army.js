const puppeteer = require('puppeteer')
const botnet = require('./botnet')

class Army {
    
    async createArmy(websiteTarget, numberBot, numberReload) {
        const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
           
        for(let i = 1; i <= numberBot; i++) {
            await botnet.createBotnet(browser, websiteTarget, numberReload)
        }

        await browser.close();
        
    }
}

module.exports = new Army