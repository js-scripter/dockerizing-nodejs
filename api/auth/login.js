const knex = require('../../knex-db/knex-orm')

const logout = async (request, response) => {
    console.log('logout model')
    request.session.loggedin = false;
    request.session.user =undefined
    response.redirect('/auth/loginForm')
}

const loginForm = async(request,response)=>{
    console.log('login form model')
    response.render('loginForm')
}

const login = async (request, response) => {
    console.log('login model')
    const emailInput = request.body.email
    const passwordInput = request.body.password
    console.log(emailInput + passwordInput)
    knex('users').where({
      email: emailInput,
      password:  passwordInput
    })
    .select('*')
    .then(user=>{
        console.log(user)
        if(user && user.length > 0){
            request.session.loggedin = true;
            request.session.user = {id: user.id, name: user.name}
            response.redirect('/users')
        }else{
            response.send('Incorrect Username and/or Password!');
        }
        response.end();
    })
    .catch(error=>{
        throw error
    })
}



module.exports = {
    logout,
    loginForm,
    login
}