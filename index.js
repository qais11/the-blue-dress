const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session')
const massive = require('massive')
const db = require('./db')
// const passport = require('passport')
// const config = require('./config.js')

const port = 3000;

const app = express();

app.use(express.static(__dirname + './public'))
app.use(express.static('public'))
massive({
  host: 'localhost',
  port: 3000,
  database: 'the-blue-dress',
  user: 'postgres',
  password: '1234'
}).then(instance => {
  app.set('db', instance)

app.get('/' , ())
})


app.use(json());
app.use(cors())





app.listen(port , () => {
  console.log(`listenin' to prot ${port}`);
})

