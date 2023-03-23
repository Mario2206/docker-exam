const express = require("express");
const config = require("./db.config");

const db = require("knex")({
  client: "mysql2",
  connection: {
    host: config.HOST,
    port: config.PORT,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE,
  },
});

const cors = require("cors");
const app = express();

const port = 4001
app.use(express.json());
app.use(cors());

app.get("/todos", async (req, res) => {
  const todoItems = await db("todos").select("*")
  res.status(200).json(todoItems);
});

app.post("/todos", async (req, res) => {
  const body = req.body;
  const newTodoItem = await db("todos").insert({name: body.name, description: body.description, completed: false})
  res.status(201).json(newTodoItem);
});

app.delete("/todos/:todoId", async (req, res) => {
  const deleteItem = await db("todos").where("id", req.params.todoId).del()
  res.status(200).json(deleteItem);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
