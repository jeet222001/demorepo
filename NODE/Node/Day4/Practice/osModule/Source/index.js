const os =  require('os')

//console.log(os.tmpdir())

console.log('endinness:-'+os.endianness())
console.log('hostname:-'+ os.hostname())
console.log('ostype'+os.type())
console.log('os Platform:-'+os.platform())
console.log('os Arch'+ os.arch())
console.log('os uptime'+ os.uptime())
console.log('os LoadAverage'+ os.loadavg())
console.log('os Totalmemory'+os.totalmem())
console.log('Free Memory'+os.freemem())
console.log( os.cpus())
console.log( os.networkInterfaces())

console.log('--------------');
console.log(os.EOL);