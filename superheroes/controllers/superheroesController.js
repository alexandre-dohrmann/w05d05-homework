const express = require('express');
const router = express.Router();

const Superheroes = require('../models/MarvelUniverse');


// +++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++
// Index Page - All of the Superheroes:
// +++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++

router.get('/', (req, res) => {
	Superheroes.find({}, (err, allSuperheroes) => {
		if(err) {
			res.send(err);
		} else {
			res.render('index.ejs', {
			heroList: allSuperheroes
			});
		};
	});
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// New Superhero Page & Route - Redirecting to the Marvel Superhero Universe Page:
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.get('/new', (req, res) => {
    res.render('new.ejs', {});
});

router.post('/', (req, res) => {
    Superheroes.create(req.body, (err, createdHero) => {
    	if(err) {
    		res.render(err);
    	} else {
    		res.redirect(`/superheroes/${createdHero.id}`);
    	}
    });
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Edit Page & Route - Redirecting to Individual Superhero Page:
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

router.get('/:id/edit', (req, res) => {
	Superheroes.findById(req.params.id, (err, hero) => {
		if (err) {
			res.render(err);
		} else {
			res.render('edit.ejs', {heroList: hero});
		}
	});
});

router.put('/:id', (req, res) => {
	Superheroes.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, hero) => {
		if (err) {
			res.send(err);
		} else {
			res.redirect('/superheroes');
		}
	});
});

// +++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++
// Show Page - Individual Superhero:
// +++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++

router.get('/:id', (req, res) => {
	Superheroes.findById(req.params.id, (err, hero) => {
		if (err) {
			res.render(err);
		} else {
			res.render('show.ejs', {heroList: hero});
		}
	});
});

// +++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++
// Delete Route - Delete Superhero from Main Page:
// +++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++

router.delete('/:id', (req, res) => {
    Superheroes.findByIdAndRemove(req.params.id, (err, hero) => {
    	if (err) {
    		res.send(err);
    	} else {
    		res.redirect('/superheroes');
    	}
    });
});

// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++
module.exports = router;
// ++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++

