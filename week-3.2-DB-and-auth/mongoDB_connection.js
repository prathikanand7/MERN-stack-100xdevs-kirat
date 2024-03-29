const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://prathik77:vOh4kE4VMyT2KGww@cluster0.qmxjgsm.mongodb.net/userappnew",
);

//Mongoose provides a straight-forward, schema-based solution to model your application data.
const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
});

const user = new User({
    name: "Harkirat",
    username: "harkirat@example.com",
    password: "123456"
});

user.save(); //this will write the data into the DB, just for an example


const ALL_USERS = [
    {
        name: "harkirat singh",
        username: "harkirat@gmail.com",
        password: "123",
    
    },
    {
        name: "Raman singh",
        username: "raman@gmail.com",
        password: "123321",
    
    },
    {
        name: "Priya kumari",
        username: "priya@gmail.com",
        password: "123321",
    
    },
];
const app = express();
app.use(express.json());

function userExists(username, password) {
    return ALL_USERS.some((user)=>
    user.username === username && user.password === password);
}

//for posting things - we need postman app
app.post("/signin", async function (req, res) {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    //findOne() is like a WHERE SQL staatement, like sending a query to db to find something, can have more constraints.
    const existingUser = await User.findOne({ email: username });
    //CRUD - Create, Read, Update and Delete
    if (existingUser) {
        return res.status(400).send("Username already existis");
    }

   /*  if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    } */

    if (!userExists(username, password)) { 
        const user = new User({
            name: name,
            username: username,
            password: password
        });

        //Or use mongoDB create function - does the same
        await User.create({ name: name, username: username, password: password });
    }
    user.save();
    res.json({
        msg: "New User has been created successfully"
    })

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username from the database
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000);