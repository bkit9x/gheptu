//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');

const app = express();

const hostname = '192.168.1.20';
const port = 3000;

//set dynamic views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
//set public folder as static folder for static file
app.use(express.static('public'));

//route for home page
app.get('/',(req, res) => {
  //render index.hbs file
  res.render('index',{
    name : "M Fikri"
  });
});


app.get('/home', function (req, res) {
  res.render('view',{
    name : "M Fikri"
  });
});

app.get('/about', function (req, res) {
  res.send('This is about page');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 