var fs = require('fs');

fs.appendFile('./person.txt', '\nhello india', (err) => {
    if (err) throw err
})