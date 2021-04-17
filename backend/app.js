const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./database/db');

// Express Route
const studentRoute = require('./routes/student.routes');

//  Connecting MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database successfully connected');
},
    error => {
        console.log('Could not connect DB' + error);
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/student', studentRoute);

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log(`server start at ${port}`)
}); 

// ERROR 404
app.use((req, res, next) => {
    next(createError(404));
})

// ERROR handler
app.use((err, req, res, next) => {
    console.error(err.message);
    if (err.message) err.statusCode(500);
    res.status(err.statusCode).send(err.message);
})