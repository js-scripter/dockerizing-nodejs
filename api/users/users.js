const knex = require('../../knex-db/knex-orm')

const getUsers = async (request, response) => {
    knex.select('*').from('users')
    .then(data=>{
        response.render('users/users',{data:data})
    })
    .catch(error=>{
        throw error
    })
}
const newUserForm = async(request,response)=>{
    response.render('users/newUserForm');
}

const updateForm = async(request,response)=>{
    const id = parseInt(request.params.id)
    knex('users')
    .where('id', id)
    .then(result=>{
        response.render('users/updateForm',{data:result})
    })
    .catch(error=>{
        throw error;
    })
}

const getUserById = async (request, response) => {
    const id = parseInt(request.params.id)
    knex('users')
    .where('id', id)
    .then(result=>{
        response.render('users/users-details',{data:result})
    })
    .catch(error=>{
        throw error;
    })

}

const addUser = async(request,response)=>{
    const newUser={ 
        name:request.body.name,
        password:request.body.password,
        twitter_link:request.body.twitter_link,
        linkedin_url:request.body.linkedin_url,
        blog_url:request.body.blog_url,
        email:request.body.email
    }
    knex
    .insert(newUser, ['id'])
    .into('users')
    .then(result=>{
        response.redirect('/users')
    })
    .catch(error=>{
        throw error;
    })
}
const updateUser = (request, response) => {
    const id = request.body.id
    const name = request.body.name
    delete(request.body.id);
    knex('users')
    .where({ id: id })
    .update(request.body, ['id', 'name'])
    .then(result=>{
        response.redirect('/users/details/'+id)
    })
    .catch(error=>{
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
    updateForm
}