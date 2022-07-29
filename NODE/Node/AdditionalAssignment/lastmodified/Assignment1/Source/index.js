// var fs = require('fs')
// var path = require('path')

// var uploadsDir = __dirname + '/Test';
// var modifiedFile =[]
// var nooffile = 2;

// fs.readdir(uploadsDir, function (err, files) {
//     files.forEach(function (file, index) {
//         var stat = fs.stat(path.join(uploadsDir, files));

//         modifiedFile.push({ cTime: stat.ctime.valueOf(), Name: file, Index: index })

//     });
//     var data = modifiedFile.sort((a, b) => b.cTime - a.cTime)
//     var secondMaxTime = data[nooffile - 1].cTime

//     data.forEach((p)=>{
//         if(secondMaxTime>p.cTime){
//             fs.unlinkSync(path.join(uploadsDir,v.Name))
//         }
//     })
// });
const path = require('path');
const fs = require('fs');

var uploadsDir = __dirname + '/Test';
let modifiedFiles = [];
var noOfFile = 2;

var files = fs.readdirSync(uploadsDir);
files.forEach((file, index) => {
    var stat = fs.statSync(path.join(uploadsDir, file));
    modifiedFiles.push({ cTime: stat.ctime.valueOf(), Name: file, Index: index });
    console.log(stat);
});

var data = modifiedFiles.sort((a, b) => b.cTime - a.cTime);
var MaxCTime = data[noOfFile - 1].cTime;
data.forEach((v) => {
    if (MaxCTime > v.cTime) {
        fs.unlink(path.join(uploadsDir, v.Name));
    }
});
console.log('Last Two file remaining other deleted');
