//IMPORT DEPENDENCIES

const express = require('express');
const cors = require('cors');
//IMPORT CAUSE.JSON FILE
const causes = require('./cause.json')
//CREATE APP OBJECT
const app = express();
//SETUP MIDDLEWARE
app.use(cors());