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

const http = require("http"); // gets repalced by express
const fs = require("fs");
const path = require("path");

fs.writeFileSync("./newFile.txt", "write in this file");
console.log(__filename);
console.log(__dirname);

console.log(path.join(__dirname, "storage"));

// default import
const auth = require("./auth");
console.log(auth);
auth.signup("sita", "password");


// named import
const { login, signup } = require("./auth");
// signup("sita", "password");

const checkRole = require("./checkRole");
checkRole();
