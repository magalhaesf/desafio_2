const mongoose = require('mongoose');
const { Schema } = mongoose;

const PhotoSchema = new Schema ({
    image: {type: String, required: true}
});

module.exports = mongoose.model('Photo', PhotoSchema);