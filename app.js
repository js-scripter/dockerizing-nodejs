const express = require('express');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3000
//get migrate module
const migrate = require('./bin/migrate')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true,}))


//set view engine
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

//add root route
app.get('/', (request,response)=>{
    response.redirect('/users');
}) 

// add router
app.use('/users', require('./api/users/routes'));

//run migration before starting the server
migrate.addUsersTable()
.then(res=>{
    app.listen(PORT, () => {
        console.log(`The web server has started on port ${PORT}`);
    });
})
.catch(error=>{
    console.log(error)
    console.log('Migration failed hence server can not be started')
});
