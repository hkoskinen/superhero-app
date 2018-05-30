const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('./db/db');

const SuperHero = require('./models/superhero');

const loginRouter = require('./routes/login');
const indexRouter = require('./routes/index');

// set the view engine to pug
app.set('view engine', 'pug');

// tell app where the pug views are stored
app.set('views', './views');

// tell app where the static content (css, js, images) are served from
app.use(express.static('public'));

//
app.use(bodyParser.urlencoded({extended: true}));

// routers
app.use('/', indexRouter);
app.use('/login', loginRouter);


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
