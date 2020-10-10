const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jokeSchema = new Schema({
    joke: { type: String, required: true },
    punchline: { type: String, required: false }
});

const Joke = mongoose.model("Joke", jokeSchema);

module.exports = Joke;