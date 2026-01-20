const express = require("express");
// import express from "express"
const cors = require("cors");

const { checkAuthentication } = require("./middlewares/auth");
const { checkIsBuyer } = require("./middlewares/role");
const productRoute = require("./routes/product");

const app = express();
const PORT = 3000;

const Joi = require("joi");

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
app.use(productRoute);

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

app.post("/api/carts", checkAuthentication, checkIsBuyer, (req, res) => {
  res.send("added to cart");
});

/* route level middelware */
app.get("/api/dashboard", checkAuthentication, (req, res) => {
  res.send({
    total: 101,
    message: "sensitive infomation",
  });
});

const signupValidationschema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
  name: Joi.string().min(3).required(),
  address: Joi.string(),
});

app.post("/api/signup", (req, res) => {
  let result = signupValidationschema.validate(req.body, {
    abortEarly: false,
    stripUnknown: false,
    allowUnknown: true,
  });

  let errors = result.error?.details.map((el) => ({
    message: el.message,
    field: el.context.key,
  }));

  if (errors) {
    return res.status(400).send({
      errors: errors,
    });
  }

  res.send("user created.");

  return;

  console.log("signup");

  // validate req.body
  //  email
  // password
  //  name
  //  address optional
  // create new user in database.
});

// start the server
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
