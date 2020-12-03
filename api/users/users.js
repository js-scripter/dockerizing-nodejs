const knex = require('../../knex-db/knex-orm')
const short = require('short-uuid');

const getUsers = async (request, response) => {
    knex.select('*').from('users')
    .then(data=>{
        response.render('users/users',{data:data})
    })
    .catch(error=>{
        // response.send(error)
        throw error
    })
}
const newUserForm = async(request,response)=>{
    response.render('users/newUserForm');
}

const updateUserForm = async(request,response)=>{
    const id = parseInt(request.params.id)
    knex('users')
    .where('id', id)
    .then(result=>{
        // response.json(result)
        console.log('in update user form')
        console.log(result)
        response.render('users/updateUserForm',{data:result})
    })
    .catch(error=>{
        // response.status(500)
        throw error;
    })
}

const getUserById = async (request, response) => {
    console.log('in get user details')
    const id = parseInt(request.params.id)
    knex('users')
    .where('id', id)
    .then(result=>{
        // response.json(result)
        console.log(result)
        response.render('users/users-details',{data:result})
    })
    .catch(error=>{
        // response.status(500)
        throw error;
    })

}

const addUser = async(request,response)=>{
    console.log('in add user')
    console.log(request.body)
    const newUser={ 
        name:request.body.name,
        password:request.body.password,
        twitter_link:request.body.twitter_link,
        linkedin_url:request.body.linkedin_url,
        blog_URL:request.body.blog_URL,
        email:request.body.email
    }
    knex
    .insert(newUser, ['id'])
    .into('users')
    .then(result=>{
        response.redirect('/users')
    })
    .catch(error=>{
        // response.send(error)
        throw error;
    })
}
const updateUser = (request, response) => {
    const id = request.body.id
    console.log(request.body)
    const name = request.body.name
    console.log(name)
    knex('users')
    .where({ id: id })
    .update({ name: name}, ['id', 'name'])
    .then(result=>{
        response.send('updated name = '+name + ' for id= '+id)
    })
    .catch(error=>{
        // response.status(500)
        throw error
    })
  
}

const deleteUser = async (request, response) => {
  const id = parseInt(request.params.id)
    knex('users')
    .where('id', id)
    .del()
    .then(result=>{
        response.redirect('/users')
    })
    .catch(error=>{
        // response.send(error)
        throw error
    })
}



module.exports = {
    getUsers,
    addUser,
    deleteUser,
    getUserById,
    updateUser,
    newUserForm,
    updateUserForm
}