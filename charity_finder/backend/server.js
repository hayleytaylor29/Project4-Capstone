//IMPORT DEPENDENCIES
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const seed = require('./models/seed');
const router = express.Router();

//CREATE APP OBJECT
const app = express();
//SETUP MIDDLEWARE
app.use(express.static('public'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(express.json());


//controllers
const charityController = ('./controllers/charities.js')
app.use('/newcharity', charityController);

//get home page
app.get('/', (req, res) => {
    res.render('server is running')
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`))

mongoose.connect('mongodb://localhost:27017/charities', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
},
    error => {
        console.log('could not connect: ' + error)
    }    
);

// module.exports = app;