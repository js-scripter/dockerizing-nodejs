//get express app to create server
const express = require('express');

//use session and cookies for tracking users
const session = require('express-session');

//cookie parser
const cookieParser = require('cookie-parser');

//for logging
var morgan = require('morgan');

//handle bars templating engine
const exphbs = require('express-handlebars');

//knex
const knex = require('./knex-db/knex-orm')

//get db creation module
// const createDb = require('./bin/createdb')

//get migrate module for table creation
// const tablesMigrate = require('./bin/migrate')

//set port
const PORT = process.env.PORT || 8080

//create instance of express app
const app = express();

//parse the body of request object when ajax request is made
app.use(express.json());

//parse the body of request object when HTML form is submitted
app.use(express.urlencoded({extended:true,}))

// set morgan to log info about our requests for development use.
app.use(morgan('dev'));


// initialize cookie-parser to allow us access the cookies stored in the browser. 
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));


//set view engine to handlebar and use short extention like .hbs for handlebars
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');


//health check API endpoint
app.get('/health', function (request, response) {
  response.status(200).json({
    status: 'OK'
  });
});

//add root route
app.get('/', (request,response)=>{
    response.render('home');
}) 


//add authentication routes
app.use('/auth', require('./api/auth/routes'))


// add users router to manage CRUD operations of users entity
app.use('/users', require('./api/users/routes'));


//start app
app.listen(PORT, () => {
    console.log(`visit http://localhost:8000/`);
});