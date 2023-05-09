const express = require('express')
const app = express();
const port = 8000;
require('./config/mongoose.config')
app.use(express.json(),express.urlencoded({extended: true}))
const allMyJokesRoute = require('./routes/jokes.route')
allMyJokesRoute(app)
app.listen(port,()=> console.log(`Example app listening at http://localhost:${port}`))
