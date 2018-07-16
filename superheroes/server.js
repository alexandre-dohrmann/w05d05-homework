const express = require ('express');	
const app = express();
const PORT = 3000;

const methodOverride = require('method-override');
app.use(methodOverride("_method"));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));
require('./db/db');


const superheroesController = require('./controllers/superheroesController');
app.use('/superheroes', superheroesController);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Listening/Opening PORT 3000:
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.listen(PORT, function() {
	console.log('Deploying Superheroes at Port', PORT);
});