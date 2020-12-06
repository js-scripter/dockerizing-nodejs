const checkSession = (request,response,next)=>{
	if (request.session.loggedin) {
        next()
    } else {
        response.redirect('/auth/loginForm');
    }
}
module.exports = {
	checkSession
}