var fs = require("fs");

// Asynchronous read
fs.readFile('file1.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('file2.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");

//notice synchronous goes first because Asynchronous didnt wait until all content was read