const db = require('../models');

modlule.export = {
    findAll: (req, res) => {
        db.Art
            .find()
            .sort({ date: -1})
            .then(dbModel => res.json(dbModel))
    },

    create: (req, res) => {
        const { sku, desc } = req.body
        db.Art
            .create({
                title, 
                author,
                synopsis
            })
            .then(dbModel => res.json(dbModel));
    },

    update: (req, res) => {
        db.Art 
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel));
    },

    delete: (req, res) => {
        db.Art  
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel));
    }
}