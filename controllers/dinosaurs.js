//create an express router
let router = require('express').Router()
let fs = require('fs')

//routes
router.get('/', function(req, res) {
    let dinosaurs  = fs.readFileSync('./dinosaurs.json');
    let dinoData = JSON.parse(dinosaurs);
    res.render('index', {dinoData});
});

router.post('/', function(req, res) {
  
  //opening ds file
  let dinosaurs = fs.readFileSync('./dinosaurs.json')
  let dinoData = JSON.parse(dinosaurs);
   
   //add item from user form
  dinoData.push({name: req.body.name, type: req.body.type});
   
   //save new dinosaur object
  fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));
   
   //redirect to the get dinsaur route
   res.redirect('/');
  })
  
  router.get('/new', (req, res) => {
    res.render('new')
  })

  router.delete('/:index', (req, res) => {
  	let dinosaurs = fs.readFileSync('./dinosaurs.json')
  	let dinoData = JSON.parse(dinosaurs)

  	dinoData.splice(req.params.index, 1)

  	fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
  	res.redirect('/dinosaurs')
  })

  router.get('/:id', function(req, res) {
    let dinosaurs = fs.readFileSync('./dinosaurs.json')
    let dinoData = JSON.parse(dinosaurs);
  
  //get array index from url
    let dinoIndex = parseInt(req.params.id);
  
  //res.sned whichever dino index got called
  res.send(dinoData[dinoIndex]);
})

// export the router so we can include it into elsewhere
module.exports = router
