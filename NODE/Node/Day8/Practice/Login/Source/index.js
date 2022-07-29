const express = require('express');
const app = express();

app.get('', function (req, res) {
    res.send('Hello World');
})
app.use(express.json())
app.disable('x-powered-by');

app.post('/login', (req, res) => {
    let userData = { username: req.body.username, password: req.body.password };
    if (userData.username == 'admin' && userData.password == 'admin') {
        res.status(200).json({
            message: 'Login Successful',
            status: true
        });
    } else {
        res.status(401).json({
            message: 'Login Failed',
            status: false
        });

    }
});
app.use((err, req, res, next) => {
    console.log('logging');
    console.log(req.method, err.stack);
    next();
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});