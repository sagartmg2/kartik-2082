// commonjs vs es6

/* 
    common js
    - module.exports
    - require

    ecmascript // moudle
    - export default
    - import 

*/

/* 
    global objects in nodejs
    - console
    - module    
    - require
    - __dirname
    - __filename
    - process

*/

/* 
    global modules in nodejs
    - global module
        - http
        - fs
        - path
    - local module
        our local js files
    - third party module
        - bcrypt
        - jsonwebtoken
        - nodemon
        - react
*/

// const http = require("http"); // gets repalced by express
// const fs = require("fs");
// const path = require("path");

import http from "http";
import fs from "fs";
import path from "path";

fs.writeFileSync("./newFile.txt", "write in this file");
// console.log(__filename);
// console.log(__dirname);

// console.log(path.join(__dirname, "storage"));

// default import
// const auth = require("./auth");
// import auth from "./auth.js"; // ERROR: default export not found

// named import
// const { login, signup } = require("./auth");
import { signup as register, login } from "./auth.js"; // object destructuring
// signup("sita", "password");
login("sita", "password");
register("sita", "password");

// const checkRole = require("./checkRole");
import checkPermissions from "./checkRole.js"; // in default export, you can rename while importing
checkPermissions();
