const express = require("express");
const todos = express.Router();
const { getAllTodos, getTodo, createTodo, updateTodo, deleteTodo } = require("../queries/todos.js");



// Index
todos.get("/", async (req, res) => {
    try {
        const allTodos = await getAllTodos();
        res.status(200).json(allTodos);
    } catch(err) {
        res.status(500).json({ error: err });
    }
});

// Show
todos.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const todo = await getTodo(id);
        res.status(200).json(todo);
    } catch(err) {
        if (err.result?.rowCount === 0) {
            res.status(404).json({ error: `Todo with id of ${id} not found`});
        } else {
            res.status(500).json({ error: err });
        }
    }
});

// Create
todos.post("/", async (req, res) => {
    try {
        const newTodo = await createTodo(req.body);
        res.status(200).json(newTodo);
    } catch(err) {
        res.status(500).json({ error: err });
    }
});

// Update
todos.put("/:id", async (req, res) => {
    const { id } = req.params;
    const todo = req.body;

    try {
        const updatedTodo = await updateTodo(id, todo);
        res.status(200).json(updatedTodo);
    } catch(err) {
        if (err.result?.rowCount === 0) {
            res.status(404).json({ error: `Todo with id of ${id} not found`});
        } else {
            res.status(500).json({ error: err });
        }
    }
});

// Delete
todos.delete("/:id", async (req, res) => {
    const { id } = req.params;
    
    try {
        const deletedTodo = await deleteTodo(id);
        res.status(200).json(deletedTodo);
    } catch(err) {
        if (err.result?.rowCount === 0) {
            res.status(404).json({ error: `Todo with id of ${id} not found`});
        } else {
            res.status(500).json({ error: err });
        }
    }
});


module.exports = todos;