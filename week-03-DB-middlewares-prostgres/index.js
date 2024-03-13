const express = require("express");
const app = express();
app.use(express.json());

app.get("/health-checkup", function (req, res) {
    const userName = req.headers.userName;
    const password = req.headers.password;
    const kidneyId = req.headers.kidneyId;

    if (!(userName === "harkirat" && password == "pass")) {
        res.status(400).json({ "msg": "Somethings up with your inputs" })
        return;
    }
    if (kidneyId == 1 || kidneyId == 2) {
        res.status(400).json({ "msg": "Somethings up with your kidneys" })
        return;
    }

    //do something with the kidney here
    res.json({
        msg: "Your kidney is fine!"
    })
});

app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;
    const kidneylength = kidneys.length;
    res.send("you have " + kidneylength + " kidneys");

});

//global catches - error handling middleware
app.use(function (err, req, res, next) {
    res.json({
        msg: "sorry sonthing's up with our server"
    })
})

app.listen(3000);

//need postman to do post and put request to server

