const mongoose = require("mongoose")
// ? adding schemas that we can create that turn into models for our collections. 
const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true,'Setup  is required'],
        minLength: [15,'Setup must be at least 15 characters'],
        maxLength: [255, 'Setup must be at least 255 characters']
    } ,
    punchline:{
        type: String,
        required : [true,'punchline is required '],
        minLength: [5, 'Punchline must be at least 5 characters'],
        maxLength: [255, 'Punchline cannot be more than 255 characters']
  },
},

  { timestamps: true }
);
 

/* 
Its job is to take a blueprint object and, in turn, create the necessary database
 collection out of the model. We get this blueprint by making a new schema
 instance from the mongoose.Schema() object constructor.
*/
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
// module.exports = mongoose.model('joke', JokeSchema)
