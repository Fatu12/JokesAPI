


const JokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get('/api/jokes',JokeController.getAllJokes);
  app.get('/api/jokes/random', JokeController.getRandom)
  app.post("/api/jokes/new", JokeController.createJoke);
  app.get("/api/jokes/:id", JokeController.getOneJoke);
  app.put("/api/jokes/:id", JokeController.updateJoke);
  app.delete("/api/jokes/:id", JokeController.deleteJoke);
};


// const JokesController = require('../controllers/jokes.controller')


// module.exports = app =>{
//     // returns a list of all jokes
//     // app.get('/api/jokes', JokesController.getAllJokes)
//     // // app.get('/api/jokes', JokesController.getAllJokes)
//     // // returns one joke with a matching : id
//     // app.get('/api/jokes/:id', JokesController.getOneJoke)
//     // adds a new joke to the database
//     app.post('/api/jokes',JokesController.createJoke)
//     app.patch('/api/jokes/:id' ,JokesController.updateJoke)
//     app.delete('/api/jokes/:id', JokesController.deleteJoke)
// }