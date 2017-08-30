const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');
const http = require('http');
const connectionString = "postgres://postgres:qais11@localhost/postgres";
// const massiveInstance = massive.connectSync({connectionString : connectionString});
const port = 3000;
const app = express();
const db = './db'
massive( connectionString ).then( dbInstance => app.set('db', dbInstance) );
app.use(json());
app.use(cors())
app.use(express.static(__dirname + './public'))
app.use(express.static('public'));

app.get('/getAll', function (req, res){
  
  db.getAll(function(err , all){
      console.log(all);
      console.log(err);
      res.send(all)
    })
  })







app.listen(port , () => {
  console.log(`listenin' to prot ${port}`);
});
