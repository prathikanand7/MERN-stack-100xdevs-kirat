const fs = require('fs');

// my own asynchronous function
function kiratsReadFile() {
    console.log("inside kirat read file");
    return new Promise(function (resolve) {
        console.log("inside promise");
        fs.readFile("a.txt", "utf-8", function (err, data) {
            console.log("before resolve");
            resolve(data);
        });
    })
}

// callback function to call
function onDone(data) {
  console.log(data)
}

// kiratsReadFile().then(onDone);

let b = kiratsReadFile()
console.log(b);
b.then(onDone);