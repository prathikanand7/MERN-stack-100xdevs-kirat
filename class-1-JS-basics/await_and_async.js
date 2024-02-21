function kiratsAsyncFunction() {
    let p = new Promise(function (resolve) {
        // do some async logic here
        setTimeout(function () {
            resolve("hi there")
        }, 5000)
        return p;
    });
};

async function main() {
    let val = await kiratsAsyncFunction();
    console.log("hi there 2");
    console.log(value);
}

main();