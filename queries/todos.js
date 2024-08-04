const db = require("../db/dbConfig.js");


const getAllTodos = async () => {
    const allTodos = await db.any("SELECT * FROM todos");
    return allTodos;
};

const getTodo = async (id) => {
    const todo = await db.one("SELECT * FROM todos WHERE id = $1", id);
    return todo;
};

const createTodo = async (todo) => {
    const newTodo = await db.one(
        "INSERT INTO todos (\
            todo_message, completed\
        ) VALUES ($1, $2) RETURNING *",
        [todo.todo_message, todo.completed]
    );
    return newTodo;
};

const updateTodo = async (id, todo) => {
    const updatedTodo = await db.one(
        "UPDATE todos SET \
        todo_message=$1, completed=$2\
        WHERE id = $3 RETURNING *",
        [todo.todo_message, todo.completed, id]
    );
    return updatedTodo;
};

const deleteTodo = async (id) => {
    const deletedTodo = await db.one("DELETE FROM todos WHERE id = $1 RETURNING *", id);
    return deletedTodo;
};


module.exports = { getAllTodos, getTodo, createTodo, updateTodo, deleteTodo };