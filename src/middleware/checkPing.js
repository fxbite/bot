
const axios = require('axios')

const checkPingTargetWebsite = async(req, res, next) => {
    try {
        const {websiteTarget} = req.body
        const response = await axios.get(websiteTarget)
        
        if(response.status === 200 || response.statusText === 'OK') {
            next()
        } else {
            res.status(400).json({
                status: 'Failed',
                message: 'Target website is unavailable!',
                websiteTarget: websiteTarget
            })
        }
    } catch (error) {
        const {websiteTarget} = req.body
        res.status(400).json({
            status: 'Failed',
            message: 'Target website is unavailable!',
            websiteTarget: websiteTarget
        })
    }
}

module.exports = {checkPingTargetWebsite}