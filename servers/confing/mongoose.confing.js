// ! In any file that will use the Mongoose library, you will need to be sure to require it at the top of 
// !the file similar to this:

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Jokes_db', {
     // ! he useNewUrlParser and useUnifiedTopology are options we pass to get rid of deprecation messages in our terminal.
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

