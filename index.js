let express = require('express');
let app = express();
let methodOverride = require('method-override')

// Use EJS
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))

// Serve static files
app.use(express.static('static'))

// Use body-parser
app.use(express.urlencoded({ extended: false }))

// Include the controller's routes
app.use('/dinosaurs', require('./controllers/dinosaurs'))


// Assign a port
app.listen(3000);