const express = require("express");

const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send("Hello World!")
})


app.post("/backend-api/conversation", function (req, res) {
    //run Machine Learning model
    res.send("Hello World again!")
})

app.listen(port, function () {
    console.log('Example app is listening to port ${port}')
})