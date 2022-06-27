const {v4: uuidv4} = require('uuid')

class Botnet {

    async createBotnet(browser, websiteTarget, numberReload) {
        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(0)
        await page.goto(websiteTarget, {waitUntil: 'load', timeout: 0});
        await page.setCacheEnabled(false)
        // await page.screenshot({path: `Test/${uuidv4()}.jpg`})
        for(let i = 1; i <= numberReload; i++){
            await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] })
        }
        
    }
}

module.exports = new Botnet