var dns = require('dns');

dns.lookup('www.google.com', function onLookup(e, address, family) {
    console.log('address:', address);
    dns.reverse(address, function (err, hostnames) {
        if (err) {
            console.log(err.stack);
        }

        console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
    });
});
console.log('------------------');
var w3 = dns.lookup('w3schools.com', function (err, addresses, family) {
    console.log(addresses);
});
console.log(w3);
console.log('------------------');
