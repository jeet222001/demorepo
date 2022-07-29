var path = require('path');
//Extract the filename, but leave the file extension:
var filename = path.basename('/Users/Refsnes/demo_path.js', '.js');
console.log(filename);


//Return the delimiter:
console.log(path.delimiter);


//Return the directries:
var directories = path.dirname('../Source/README.md');
console.log(directories);


//Return the extension:
var ext = path.extname('/Users/Refsnes/demo_path.js');
console.log(ext);


//Create a path object:
var obj = { dir: 'C:\\Users\\Refsnes', base: 'demo_path.js' }
//Format the path object into a path string:
var p = path.format(obj);
console.log(p);




console.log(path.isAbsolute('/test/demo_path.js')); //true
console.log(path.isAbsolute('test/demo_path.js')); //false
console.log(path.isAbsolute('C:\\test\\demo_path.js')); //true


var x = path.join('Users', 'Refsnes', 'demo_path.js');
console.log(x);


var x = path.normalize('Users/Refsnes/../Jackson');
console.log(x);


// var p = require('node:path/posix')
console.log(path.parse('../node_modules/bootstrap/dist/js/bootstrap.bundle.js'));
// console.log(p.posix);
console.log(path.relative('../../Assignment1/Source/README.md', '../Source/README.md'));
console.log(path.relative('../Analysis','../Source/README.md'));
console.log(path.resolve('../node_modules/bootstrap/dist/css/bootstrap.min.css'));

console.log(path.sep);
console.log(path.win32);