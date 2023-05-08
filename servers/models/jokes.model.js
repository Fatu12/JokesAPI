const mongoose = require("mongoose")
// ? adding schemas that we can create that turn into models for our collections. 
const JokeSchema = new mongoose.Schema({

})
/* 
Its job is to take a blueprint object and, in turn, create the necessary database
 collection out of the model. We get this blueprint by making a new schema
 instance from the mongoose.Schema() object constructor.
*/
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
// module.exports = mongoose.model('joke', JokeSchema)
