const mongoDB = require("mongoose");
mongoDB.connect("mongodb+srv://prathik77:vOh4kE4VMyT2KGww@cluster0.qmxjgsm.mongodb.net/todos");

const todoSchema = mongoDB.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoDB.model("todos", todoSchema);
module.exports = {
    todo
}