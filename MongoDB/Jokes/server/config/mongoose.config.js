const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connection to Jokes Established"))
    .catch(err => console.log("Something went wrong when conneting to the DB", err));