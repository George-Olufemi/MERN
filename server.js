//.env
require('dotenv').config();
const express = require('express');
const app = express();
const workoutRoutes = require('./routes/workouts');
//mongoose
const mongoose = require('mongoose');

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/workouts', workoutRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to db & Server is running on port ${process.env.PORT}`);
        })
    })
    .catch(err => console.log(err));
