const express = require('express');
const mongoose = require('mongoose');

const app =  express();

// DB config
const db = require('./config/keys').mongoURI;

//Connect to database
mongoose.connect(db).then(() => {
    console.log(`Mongoose connected to MongoDB successfully`);
}).catch((err) => {
    console.log(`Error connecting to database: ${err}`);
})

app.get('/', (req, res) => {
    res.send('<h1>Hello Team!!!</h1>')
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});