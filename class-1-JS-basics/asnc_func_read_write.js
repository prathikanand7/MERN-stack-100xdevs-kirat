const fs = require("fs");

//filesystem module
fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data)
});

console.log("hi there from js file");
let a = 0;

//takes very long long time than the file-read.
for (let i = 0; i < 10000000000; i++) {
    a++;
}
console.log("hi there 2");