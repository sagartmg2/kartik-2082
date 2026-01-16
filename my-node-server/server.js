const express = require("express");
// import express from "express"
const cors = require("cors");

const app = express();
const PORT = 3000;

/*  

function cors(){
  return <function>
}

*/

/* middlewares
   simple a function which has access to req and response and has ability to alter them 
   and also has access to next middleware in line

*/

app.use(cors());
app.use(express.json()); // global middleware

const checkAuthentication = (req, res, next) => {
  console.log("checkAuthentication");
  //   check token in req.headers and validate it.
  let loggedIn = false;
  if (loggedIn) {
    next();
  } else {
    return res.status(401).send({ msg: "unauthenticated" });
  }
};

// app.use(checkAuthentication); // global middeware

/* 
    CRUD operations
        C - create
        R read
        U udpated
        D delelete


    http request methods
        POST - create
        GET - read
        PUT/PATCH - update
        DELETE - delete


    http status codes
    2 : success
        200
        201
        203
        204

    3: redirection
        304
        308
    
    4:  (client/react side error)
        400  -- bad request
        401  -- unauthenticated // not logged in 
        403  -- unatuthorized  
        404  -- route not found
        405  -- route matched but request method 
        422  -- unprocessable entity : similar to 400
        429  -- DDOS attack , rate limit 

    5: server side error
        500 :  server errror : unable to handle codes properly
        503 :  gateway error 
        504
  */

app.get("/", (req, res) => {
  res.send("welcome to node-api");
});

app.get("/api/todos", (req, res) => {
  let todos = [
    { title: "html", status: false },
    { title: "css", status: false },
  ];
  res.send(todos);
});

let products = [
  {
    title: "mouse",
    price: 100,
  },
];

app.get("/api/products", (req, res) => {
  // let products = DB::find("products")
  res.send(products);
});

app.post("/api/products", (req, res) => {
  if (!req.body.title || !req.body.price) {
    return res.status(400).send("title or price missing");
  }

  console.log("req.body", req.body);
  products.push(req.body);
  res.send("product created");
});

/* route level middelware */
app.get("/api/dashboard", checkAuthentication, (req, res) => {
  res.send({
    total: 101,
    message: "sensitive infomation",
  });
});

// start the server
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
