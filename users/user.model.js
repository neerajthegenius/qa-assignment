const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    Name: { type: String, unique: true, required: true },
    Email: { type: String, required: true },
    Department: { type: String, required: true },
    PhoneNumber: { type: Number, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);