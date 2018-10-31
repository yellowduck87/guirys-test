const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGOOB_URI || 
    "mongodb://localhost/guirystest"
);

const artSeed = [
    {
        sku: "123",
        descr: "All Pro Paint Can Opener",
        date: new Date(Date.now())
    },
    {
        sku: "1234",
        descr: "Something else painty",
        date: new Date(Date.now())
    }
];

db.Art
    .remove({})
    .then(() => db.Art.collection.insertMany
    (artSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });