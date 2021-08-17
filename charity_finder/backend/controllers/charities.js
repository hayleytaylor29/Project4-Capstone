//dependencies
const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const Charity = require('../models/newCharity');
let seedCharities = require('../models/seed');

//middleware
router.use(express.urlencoded({ extended: true }));
router.use(methodOverride('_method'));
router.use(express.json({
    type: ['application/json', 'text/plain']
}))
router.use(bodyParser.json())

//seed data
router.get('/seed', (req, res) => {
    Charity.create(seedCharities, () => {
        data: charity_data
        console.log(data)
    })
})



//create new charity
router.get('/newcharities', (req, res) => {
    res.render('')
})

module.exports = router;