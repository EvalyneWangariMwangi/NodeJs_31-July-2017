var start = new Date();

setTimeout(function (argument) {
    // execution time simulated with setTimeout function
    var fs = require('fs');
	fs.readFile('file1.txt', function(err, buf) {
	  console.log(buf.toString());
	});
	fs.readFile('file2.txt', function(err, buf) {
	  console.log(buf.toString());
	});
    var end = new Date() - start;
    console.info("Execution time: %dms", end);
}, 1000);