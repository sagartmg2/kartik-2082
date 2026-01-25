const express = require("express");
const router = express.Router();

let maxId = 3;
let todos = [
  {
    id: 1,
    title: "html",
    status: true,
    created_by: "ram",
    completed_at: "2026-13-1",
  },
  {
    id: 2,
    name: "css",
    status: 1,
    created_by: {
        name:"ram"
    }
  },
  {
    id: 3,
    title: "react",
    status: true,
    created_by:1
  },
];

router.get("/api/todos", (req, res) => {
  res.send(todos);
});

router.post("/api/todos", (req, res) => {
  todos.push({
    id: ++maxId,
    title: req.body.title,
    status: false,
  });

  res.send("todos created");

  /* 
    json vs javascript object

        res.send({
        title: undefined, // js specific
        log: (number) => { return number}, // not valid in json
        status: false,
        });
    
    */
});

router.put("/api/todos/:id", (req, res) => {
  console.log(req.params.id);
  res.send("todos updated");
});

router.delete("/api/todos/:id", (req, res) => {
  console.log(req.params.id);
  res.send("todos deleted");
});

// default export
module.exports = router;
