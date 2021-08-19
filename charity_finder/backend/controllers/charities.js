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
    console.log(seedCharities)
    Charity.create(seedCharities, (err, createdCharities) => {
        // console.log(createdCharities)
        
    })
})

//get all charities
router.get('/', (req, res) => {
    Charity.find({}, (error, data) => {
        res.json(data)
    })
    .then(Charity => res.json(Charity))
    // .catch(err => res.status(404).json({ nocharitiesfound: 'No Charities Found'}))
});

//create new charity
router.post('/', (req, res) => {
    Charity.create(req.body)
    .then(Charity => res.json({ msg: 'Added Charity Successfully' }))
})

//edit charity
router.put('/:id', (req, res) => {
    Charity.findByIdAndUpdate(req.params.id, req.body)
    .then(Charity => res.json({ msg: 'Updated Successfully' }))
    // .catch(err => {
    //     res.status(400).json({ error: 'Unable to update the Database' })
    // })
})

//delete charity
router.delete('/:id', (req, res) => {
    Charity.findByIdAndRemove(req.params.id, req.body)
    .then(Charity => res.json({ msg: 'Charity Deleted Successfully' }))
})

module.exports = router;