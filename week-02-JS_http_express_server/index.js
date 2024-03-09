const express = require("express");

const app = express();
const port = 3000;

app.get("/route-handler", function (req, res) {
    //run Machine Learning model
    res.json({
        name: "Hello World again!",
        age: 25
    })
})

app.get('/', function (req, res) {
    res.send("Hello World!")
})


app.listen(port, function () {
    console.log('Example app is listening to port ${port}')
})