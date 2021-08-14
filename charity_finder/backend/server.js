//IMPORT DEPENDENCIES

const express = require('express');
const cors = require('cors');
//IMPORT CAUSE.JSON FILE
// const causes = require('./cause.json');
const { Router } = require('express');
//CREATE APP OBJECT
const app = express();
const OrgSearch = require('../frontend/src/pages/orgSearch.js')
const RegionSearch = require('../frontend/src/pages/regionSearch')
const CauseSearch = require('../frontend/src/pages/causeSearch')
//SETUP MIDDLEWARE
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(cors());
require('dotenv').config();
let bodyParser = require('body-parser');

app.get('/home', (req, res) => {
    res.send('server is running')
})
app.get('/orgsearch', (req, res) => {
    res.send(OrgSearch)
})
app.get('/regionsearch', (req, res) => {
    res.send(RegionSearch)
})
app.get('/causesearch', (req, res) => {
    res.send(CauseSearch)
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('listening on port ${PORT}'))