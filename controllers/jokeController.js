const db = require("../models");

// methods for jokes controller
module.exports = {
    findAll: (req, res) => {
        db.Joke.find(req.query)
            .then(dbJoke => res.json(dbJoke))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Joke.create(req.body)
            .then(dbJoke => res.json(dbJoke))
            .catch(err => res.status(422).json(err))
    },
    remove: (req, res) => {
        db.Joke.findById(req.params.id)
            .then(dbJoke => dbJoke.remove())
            .then(dbJoke => res.json(dbJoke))
            .catch(err => res.status(422).json(err));

    }
}