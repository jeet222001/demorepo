//setTimeOut() Practice

//Zero Delay
setTimeout(() => {
    console.log('after ');
}, 0);

console.log(' before ');

//setInterval Practice

let i = 15
setInterval(() => {

    if (i == 10) {
        return
    } else {
        console.log(i - 1)

    }


}, 2000);

//Recursive SetTimeout function

const myFunction = () => {
    // do something
    console.log('booooooooooooooo');
    setTimeout(myFunction, 1000);
};

setTimeout(myFunction, 1000);
