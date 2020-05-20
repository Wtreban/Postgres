const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
//Database
const db = require("./config/database");

//Test Connection
db.authenticate()
    .then(()=> console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

const app = express();

//Handlebars
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');


//Body Parser
app.use(bodyParser.urlencoded({extended:false}));

//Set Static folder
app.use(express.static(path.join(__dirname,'public')));

//Index Route
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

//Gig routes
app.use('/gigs', require("./routes/gigs"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

