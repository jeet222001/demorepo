var fs = require('fs/promises');

async function read() {
    try {
      const data1=  await fs.readFile('./person1.txt', 'utf8')
      console.log(data1);
      const data2 =  await fs.readFile('./person2.txt', 'utf8')
      console.log(data2);
    }catch(err){
        console.log(err);
    }
    
}
read();