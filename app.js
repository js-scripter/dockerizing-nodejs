//get express app to create server
const express = require('express');

//handle bars templating engine
const exphbs = require('express-handlebars');

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


//set view engine to handlebar and use short extention like .hbs for handlebars
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');


//health check API endpoint
app.get('/health', function (req, res) {
  res.status(200).json({
    status: 'OK'
  });
});

//add root route
app.get('/', (request,response)=>{
    response.redirect('/users');
}) 

// add users router to manage CRUD operations of users entity
app.use('/users', require('./api/users/routes'));


//below code is commented for time being later on this feature can be added
//run createDb and users table migration before starting web server 
// createDb.create((status)=>{
// 	if(status==true){
// 		console.log('DB ready');
// 		tablesMigrate.addUsersTable(function(status){
// 			if(status==true){
// 				console.log('users table ready')
// 				app.listen(PORT, () => {
// 				    console.log(`The web server has started on port ${PORT}`);
// 				});
// 			}
// 		})

// 	}else{
// 		console.log('Problem connecting to DB')
// 	}
// })

app.listen(PORT, () => {
    console.log(`visit http://localhost:8000/`);
});