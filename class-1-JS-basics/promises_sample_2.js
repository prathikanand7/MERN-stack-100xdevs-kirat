let d = new Promise(function (resolve) {
    setTimeout(() => {
        resolve("foo");
    }, 1000);
}); // these lines of code means nothing but let d = "foo" after a timeout of 1000ms

function callbackFunction() {
    console.log(d);
}
console.log(d);
d.then(callbackFunction);
