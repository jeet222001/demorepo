var fs = require('fs/promises');
var fs1 = require('fs');

var d = 'bcdfghjklmnpqrstvwxyz'
var address = ''
var count = 0

async function read() {
    try {
        address = await fs.readFile('./address.txt', 'utf8')

    } catch (e) {
        console.log(e);
    }

    address.split('').forEach(data => {
        if (d.includes(data.toLowerCase())) {
            count++
        }
    })
    console.log('Total Consonants:-'+count);

    fs1.unlink('./person.txt',(err)=>{
        if(err) throw err
        console.log('file Deleted!!');
    })
}
read();