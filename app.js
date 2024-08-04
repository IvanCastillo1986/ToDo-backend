const express = require('express');
const app = express();
const cors = require('cors');
const todosController = require("./controllers/todosController.js");

app.use(express.json());
app.use(cors());
app.use("/todos", todosController);



app.get('/', (req, res) => {
    res.send('Welcome to the ToDo App API');
});

app.get("/universe", (req, res) => {
    res.send("Hello Universe");
});

module.exports = app;