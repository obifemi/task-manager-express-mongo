const express = require('express')
const router =  express.Router()


router.route('/').get((req, res) => {
    res.send('all items are here')
})

module.exports = router