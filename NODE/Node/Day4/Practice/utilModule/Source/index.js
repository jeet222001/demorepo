const util = require('util');
const log = util.debuglog('API');
const myObject = {
    url: 'https://eran.sh',
    coffee: true,
    address: {
        address1: '123 Fake St.',
        address2: 'Gainesville, FL',
    },
    tags: ['red', 'banana', 'golf']
};
console.log(util.inspect(myObject));
console.log(typeof(util.inspect(myObject)));
