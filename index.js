const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3000;

// srivastavamohita18

mongoose.connect(
  'mongodb+srv://srivastavamohita18:1htwvSwq7SZQbIId@test-db.yrtic.mongodb.net/?retryWrites=true&w=majority&appName=test-db'
);
// const User = require('./models/urlSchema');
const db = mongoose.connection;

db.on('error', () => {
  console.log('Eror');
});
db.once('open', () => {
  console.log('Connected');
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Body parser

// link router
const urlRouter = require('./route/urlRoute');
app.use('/', urlRouter);

app.listen(PORT, () => {
  console.log('server is running');
});
