const express = require("express");
// import express from "express"
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");

const { checkAuthentication } = require("./middlewares/auth");
const { checkIsBuyer } = require("./middlewares/role");
const productRoute = require("./routes/product");
const todosRoute = require("./routes/todo");

const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5436/postgres",
);

const checkDBconnection = async () => {
  try {
    await sequelize.authenticate();
    sequelize.sync({});
    // sequelize.sync({force:true});
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

checkDBconnection();

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    underscored: true,
    tableName: "users",
  },
);

const Todo = sequelize.define(
  "Todo",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    underscored: true,
    tableName: "todos",
  },
);

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
app.use(todosRoute);

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

app.get("/api/users", async (req, res) => {
  let users = await User.findAll();
  res.send(users);
});

app.post("/api/users", async (req, res) => {
  // req.body.name
  let user = await User.create({
    name: req.body.name,
  });

  res.send(user);
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
