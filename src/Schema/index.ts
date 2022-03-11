const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/urlShortener');

const { Schema } = mongoose;

const urlSchema = new Schema({
    urlName: Number,
    urlToRedirect: String,
});

export default mongoose.model('Url', urlSchema);