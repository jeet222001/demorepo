const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('enter your name:-', name => {
    fs.appendFile('./person.txt', `\nhello ${name}`, (err) => {
        if (err) throw err
        console.log('Name Addded');
    })
    readline.close();
})