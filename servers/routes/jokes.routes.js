const jokesController = require('../controllers/jokes.controller')
const JokeController = require('../controllers/jokes.controller')

module.exports = app =>{
    // returns a list of all jokes
    app.get('/api/jokes', JokeController.getAllJokes)
    // returns one joke with a matching : id
    app.get('/api/jokes/:id', JokeController.getOneJoke)
    // adds a new joke to the database
    app.post('/api/jokes',JokeController.createJoke)
    app.patch('/api/jokes/:id' ,JokeController.createJoke)
    app.delete('/api/jokes/:id', JokeController.deleteJoke)