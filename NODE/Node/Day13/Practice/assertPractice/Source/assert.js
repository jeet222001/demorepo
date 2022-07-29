const assert = require('assert');

var x = { a: { n: 0 } };
var y = { a: { n: 0 } };
var z = { a: { n: '0' } };
assert.deepStrictEqual(x, y); //OK
assert.deepStrictEqual(x, z); /*AssertionError: { a: { n: 0 } } deepStrictEqual {a: { n: '0' } }*/

assert.ok(50 > 70, "My message goes here");
