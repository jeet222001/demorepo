const jwt = require('jsonwebtoken');
const express = require('express');
require('dotenv').config();
var app = express();

app.get('', function (req, res) {
    res.send('Hello World');
})
app.use(express.json())
app.disable('x-powered-by');

const generateAccessToken = (username) => {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '180s' });
}
app.post('/api/createNewUser', (req, res) => {
    const accessToken = generateAccessToken({ username: req.body.username });
    res.json({ accessToken });
});

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}
app.get('/api/userOrders', authenticateToken, (req, res) => {
    res.json({
        user: req.user
    });
    console.log('Logged with Authorization token' +' "-> ' +req.headers['authorization']+' " <-');

});


app.listen(process.env.PORT)