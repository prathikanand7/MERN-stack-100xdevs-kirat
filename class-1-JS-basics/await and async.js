function kiratsAsyncFunction() {
    let p = new Promise(function (resolve) {
        // do some async logic here
        setTimeout(function () {
            resolve("hi there")
        }, 1000)
    });
    return p;
}

async function main() {
    // no .then syntax and no callbacks
    let val = await kiratsAsyncFunction();
    console.log(value);
}

main();