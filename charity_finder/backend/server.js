//IMPORT DEPENDENCIES
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const seed = require('./models/seed');
const router = express.Router();
const connectDB = require('./config/connection.js')

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

// app.post('/home', (req, res) => {
//     console.log(req.body)
// })

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

module.exports = app;