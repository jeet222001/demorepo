var fs = require('fs')

fs.rename('./person1.txt', './files/person1.txt', (err) => { if (err) throw err })
