var express = require('express');
var helmet = require('helmet');
var app = express();
app.disable("x-powered-by");
app.use(helmet.hidePoweredBy())


var user = {
    name: 'Jeet', isLoggedIn: true
}

const isAuth = (req, res, next) => {
    if (user.name && user.isLoggedIn) {
        return next()
    }
   else res.redirect('/login')
}
app.get('/user', isAuth, (req, res) => {
    res.send(user)
    res.end()
})
app.get('/login',(req, res) => {
    res.send('This is Login Page')
    res.end()
})


app.listen(215)