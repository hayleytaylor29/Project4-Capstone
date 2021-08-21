//IMPORT DEPENDENCIES
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const seed = require('./models/seed');
const router = express.Router();
const connectDB = require('./config/connection.js')
const Charity = require('./models/newCharity');


//CREATE APP OBJECT
const app = express();
//SETUP MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(cors({ origin: true, credentials: true }));
app.use(methodOverride('_method'));
app.use(bodyParser.json());

connectDB();

//controllers
const charityController = require('./controllers/charities.js')
app.use('/newcharity', charityController);

//get home page
app.get('/', (req, res) => {
    res.send('server is running')
})

// app.post('/newcharity', (req, res) => {
//     Charity.findById(req.params.id, function(err, charity) {
//         if (!charity)
//             res.status(404).send("data is not found");
//         else
//             charity.orgname = req.body.orgname;
//             charity.author = req.body.author;
//             charity.mission = req.body.mission;
//             charity.orgurl = req.body.orgurl;
//             charity.save().then(charity => {
//                 res.json('charity updated!');
//             })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// })

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

module.exports = app;