const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/superheroes');
mongoose.connection.on('connected', () => {
	console.log('Mogoose is connected and ready to save and recall superheroes');
});

mongoose.connection.on('error', (err) => {
	console.log(err, ' mongoose failed to connect');
});

mongoose.connection.on('disconnected', () => {
	console.log('Mongoose is disconnected from saving and deploying superheroes');
});