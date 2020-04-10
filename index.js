let express = require('express');
let app = express();
let fs = require('fs');

app.get('/dinosaurs', function(req, res) {
	let dinosaurs = fs.readFileSync('./dinosaurs.json');
	let dinoData = JSON.parse(dinosaurs);
	res.send(dinoData);
});

app.post('/dinosaurs', function (req, res) {
	// opening ds file
	let dinosaurs = fs.readFileSync('./dinosaurs.json');
	let dinoData = JSON.parse(dinosaurs);

	// add item from user form
	dinosaurs.push(req.body);

	// save new dinosaur object
	fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinosaurs));

	// redirect to the GET /dinosaur route
	res.redirect('/dinosaurs');

})

app.get('/dinosaurs/:id', function(req, res) {
	let dinosaurs = fs.readFileSync('./dinosaurs.json');
	let dinoData = JSON.parse(dinosaurs);


	// Get the array index from our URL
	let dinoIndex = parseInt(req.params.id);

	// res.send whicher dino index got called
	res.send(dinoData[dinoIndex]);
})



app.listen(3000);