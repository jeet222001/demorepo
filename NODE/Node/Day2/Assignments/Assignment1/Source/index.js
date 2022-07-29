var fs = require('fs')
const readline = require('readline-sync')
const chalk= require('chalk')

var num1 = parseInt(readline.question('enter the number1:- '))
var num2 = parseInt(readline.question('enter the number2:- '))
var operator = readline.question(`select the operator:- 
1.Click 1 For Addition
2. Click 2 For Subtract
3. Click 3 For Division
4. Click 4 For Multiply`)

var result = 0;

function Addition(n1, n2) {
    result = n1 + n2;
    fs.writeFile('result.txt', `Addition Of the Two Numbers are :- ${result}`, err => { if (err) { console.log(err) } })
}
function Substraction(num3, num4) {
    result = num3 - num4;
    fs.writeFile('result.txt', `substraction Of the Two Numbers are :- ${result}`, err => { if (err) { console.log(err) } })
}
function Division(n3, n4) {
    result = n3 / n4;
    fs.writeFile('result.txt', `division of the two numbers: ${result}`,err => { if (err) { console.log(err) } })
}
function Multiplication(n5, n6) {
    result = n5 * n6;
    fs.writeFile('result.txt', `multiplication of the two numbers: ${result}`, err => { if (err) { console.log(err) } })

}

switch (operator) {

    case '1': {
        Addition(num1, num2)
        break
    }
    case '2': {
        Substraction(num1, num2)
        break;
    }
    case '3': {
        Division(num1, num2)
        break;
    }
    case '4': {
        Multiplication(num1, num2)
        break;
    }
    default: fs.writeFile('./result.txt', ' ', err => { if (err) { console.log(err) } }); 
        console.log(chalk.bold.red('----------------Enter Valid Choice~!!!------------------------'));
}
fs.readFile('./result.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(chalk.bold.green(data));
})