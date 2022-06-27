const express = require('express')
const puppeteer =  require('puppeteer')
const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 8080

app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/control', async(req, res, next) => {
    try {
        const {url} = req.body

        const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(0)
        await page.goto(url, {waitUntil: 'load', timeout: 0});
        await page.setCacheEnabled(false)
        await page.reload({timeout: 0})
        await page.reload({timeout: 0})
        await page.reload({timeout: 0})
        await page.reload({timeout: 0})
        await browser.close();

        res.status(200).send('Successfully')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

app.get('/', (req, res, next) => {
    res.send('OK')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})