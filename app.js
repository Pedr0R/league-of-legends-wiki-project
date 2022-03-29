const express = require('express');
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const PORT = 3000;

app.listen(PORT, function() {
  console.log(`O express está rodando na porta ${PORT}`)
});

//body parser
app.use(bodyParser.urlencoded({extended: false}));

// handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// rotas
app.use('/', require('./routes/routes'))