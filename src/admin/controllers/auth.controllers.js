module.exports.login = async (request, response, next) => {
    response.render('auth/login', { title: 'Login Page', layout: './admin/layout' });
}