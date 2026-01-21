const express = require("express");
const router = express.Router();

let maxId = 2;
let todos = [
  {
    id: 1,
    title: "html",
    status: true,
  },
  {
    id: 2,
    title: "css",
    status: true,
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
