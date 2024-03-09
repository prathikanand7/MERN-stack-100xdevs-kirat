const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

const users = [{
    name: "john",
    kidneys: [{
        Healthy: true
    }]
}];

app.get('/main', function (req, res) {
    res.send("Hello World!")
})

app.get("/route-handler", function (req, res) {
    //run Machine Learning model
    res.json({
        name: "Hello World again!",
        age: 25
    })
})

function sum1(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}

app.get("/abc", function (req, res) {
    let n = req.query.n;
    const ans = sum1(n);
    res.send("hi your answer is " + ans);
  
})



app.get("/hospital-landing", function (req, res) {
    let johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i <= johnKidneys.length; i++){
        if (johnKidneys.Healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

})

//need postman to post request into localhost
app.post("/hospital-landing", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        Healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

//need postman to put request into localhost
app.put("/hospital-landing", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].Healthy = true;
    }
    res.json({

    });
})

//need postman to put request into localhost
app.delete("/hospital-landing", function (req, res) {
    //when you dont have any un-healthy kidneys send 411
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (user[0].kidneys[i].Healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }

    if (atleastOneUnhealthyKidney) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].Healthy) {
                newKidneys.push({
                    Healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({ msg: "done" })
    }
    else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }       
})

app.listen(port, function () {
    console.log('Example app is listening to port ${port}')
})