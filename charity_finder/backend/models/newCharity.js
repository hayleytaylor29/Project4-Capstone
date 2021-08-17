const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charitySchema = new Schema({
    orgname: {type: String},
    author: {type: String},
    mission: {type: String},
    orgurl: {type: String},
}, { timestamps: true }
);

const Charity = mongoose.model('Charity', charitySchema);
module.exports = Charity;