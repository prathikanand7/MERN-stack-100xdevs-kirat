function greet() {
    console.log("hello world")
}

function greetAlien() {
    console.log("hello world of Alien")
}

// examples of Callback functions.
setTimeout(greetAlien, 5 * 1000);
setInterval(greet, 1 * 1000);