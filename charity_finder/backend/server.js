//IMPORT DEPENDENCIES

const express = require('express');
const cors = require('cors');
//IMPORT CAUSE.JSON FILE
// const causes = require('./cause.json');
// const { Router } = require('express');
//CREATE APP OBJECT
const app = express();
//SETUP MIDDLEWARE
app.use(cors());

app.get('/', (req, res) => {
    res.send('server is running')
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log('listening on port ${PORT}'))