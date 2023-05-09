const { json } = require("express");
const Joke = require("../models/jokes.model");
// Export a function to get all jokes
module.exports = {
    getAllJokes : (req, res)=>{ 
    Joke.find()

     // ! we not using req, because we not giving anything or creating anything we just reading
    .then(allJokes => res.json(allJokes))
      .catch(err => res.json(err));
    },
    getRandom : (req,res) =>{
        // skip skip() to "skip" to the desired match and return that.
    Joke.aggregate([{ $sample: { size: 1 } }])
    .then((oneRandomJoke) => res.json(oneRandomJoke ))
    .catch((err) => res.json(`Something went wrong ${err}`));
},


// Again query all users but only fetch one offset by our random #
// getRandom : (req, res) =>{
//     Joke.find().random(1)
//     .then(random => res.json(random), true, this.getRandom)
// },
//   User.findOne().skip(random).exec(
//     function (err, result) {
//       // Tada! random user
//       console.log(result) 
//     })
// })

    // Export a function to get a single joke
    getOneJoke : (req, res) =>{
        console.log(req)
        Joke.findById(req.params.id)
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json(`Something went wrong ${err}`));
    },
    // Export a function to create a joke
    createJoke : (req,res) =>{
        console.log(req)
        Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json(`something went wrong ${err}`)) 
        
    },
    updateJoke : (req, res) =>{
        console.log(req)
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

