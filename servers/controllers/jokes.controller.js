const Joke = require("../models/jokes.model")
// Export a function to get all jokes
module.exports = {
    getAllJokes : (req, res)=>{
      Joke.find()
     // ! we not using req, because we not giving anything or creating anything we just reading
      .then(allJokes => res.json(allJokes))
      .catch(err => res.json(err));

    },
    // Export a function to get a single joke
    getOneJoke: (req, res) =>{
        console.log(req)
        Joke.findById(req.params.id)
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json(`Something went wrong ${err}`));
    },
    // Export a function to create a joke
    createJoke : (req,res) =>{
        Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json(`something went wrong ${err}`)) 
        
    },
    updateJoke : (req, res) =>{
        // first we go and grab the information we want want to update, then we give the value we want to update

        Joke.findOneAndUpdate(req.params.id, req.body, {new: true, runValidators : true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json(`something went wrong ${err}`))

},
deleteJoke : (req,res)=>{
    Joke.findByIdAndDelete(req.params.id)
    .then(result => res.json(result))
    .catch(err => req.json(`something went wrong ${err}`))
}
}
// module.exports.getAllJokes = (req,res) =>{
//     Joke.find()
//     .then((allJokes)=>{
//         res.json({jokes : allJokes})
//     })
//     .catch((err) => {
//     res.json({ message: 'Something went wrong', error: err })

//     })

