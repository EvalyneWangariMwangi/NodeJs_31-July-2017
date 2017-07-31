
var start = new Date();

setTimeout(function (argument) {
    // execution time simulated with setTimeout function
    var fs = require('fs');
	var contents = fs.readFileSync('file1.txt').toString();
	var contents2 = fs.readFileSync('file2.txt').toString();
	console.log(contents);
	console.log(contents2);
    var end = new Date() - start;
    console.info("Execution time: %dms", end);
}, 1000);