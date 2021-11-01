const express = require("express");
const router = express.Router();
const db = require('../models/database')

router.get("/", (req, res) => {
  res.render("index");
});

// GET /todos - get all of the todos
router.get("/todos", async (req, res) => {
  let records = await db.query(`SELECT * FROM todos`)
  
  res.json(records);
}); 

// GET /todos/:id - get one todo list item by id
router.get("/todos/:id", async (req, res) => {
  let id = req.params.id;
  let item = await db.one(`SELECT * FROM todos WHERE id = ${id}`);

  res.json(item)
});

// POST /todos - create new todo
router.post("/todos", async (req, res) => {
  let description = req.body.description;
  let result = await db.query('INSERT INTO todos (description) VALUES ($1)', [description])
  let records = await db.query(`SELECT * FROM todos`);
  
  res.json(records);
});

// PUT /todos/:id - updating - add to database from form; editing an item
router.put("/todos/:id", async (req, res) => {
  let id = req.params.id;
  let updatedDescription = req.body.description;
  await db.none(`UPDATE todos SET description = '${updatedDescription}' WHERE id = ${id}`)
  let records = await db.query(`SELECT * FROM todos`);
  
  res.json(records);
});

// DELETE /todos/:id - deleting - after click on delete, removes from database
router.delete("/todos/:id", async (req, res) => {
  let id = req.params.id;
  await db.any('DELETE FROM todos WHERE id = $1', id);
  let records = await db.query(`SELECT * FROM todos`);

  res.json(records);
});

module.exports = router;
