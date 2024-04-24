const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const path = require('path');


const PORT = process.env.PORT || 3000;


// Set Handlebars Middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

 const otherstuff = "This is other stuff that you may need sometimes"
//set handlebars route
app.get('/', function (req, res) {
res.render  ('home', {
    stuff: otherstuff
});
});

// Set static folder
app.use(express.static('public'));


app.listen(PORT, () => console.log('Server Listening on port ' + PORT));