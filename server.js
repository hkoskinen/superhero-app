const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const SuperHero = require('./models/superhero');

mongoose.connect('mongodb://dev:dev@localhost/superhero');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/handle', (req, res) => {
/*
  SuperHero.create({
    name: req.body.name,
    superhero: req.body.superhero
  }).then((user) => {
    return res.status(201).json(user); // returns the created resource
    //res.send({name: req.body.name, superhero: req.body.superhero});
  }, () => {
    res.status(500).send({message: 'Error saving the superhero to database'})
  });
*/

  res.render('index', {
    formData: {
      name: req.body.name || '',
      superhero: req.body.superhero || ''
    }
  });
});

app.get('/heroes', (req, res) => {
  SuperHero.find().then(data => res.status(200).json(data));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
