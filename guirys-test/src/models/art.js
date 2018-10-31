const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artSchema = new Schema({
    sku: {
        type: String
    },

    descr: String
});

const Art = mongoose.model("Art", artSchema);

module.exports = Art;