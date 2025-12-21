// const bcrypt = require("bcrypt");
import bcrypt from "bcrypt";

let dbUsers = [
  {
    name: "ram",
    email: "ram@gmail.com",
    password: "password",
  },
  {
    name: "hari",
    email: "hari@gmail.com",
    password: "@#$^%^&*$&%^SDFG$#%#$%^@#$ADSF#$%",
  },
];

export const login = (email, password) => {
  //  validtion:
  //  db : email exists in db
  //  validatipn: password match ?
  // token generate
  console.log("login");
};

export const signup = (email, password) => {
  // validation : email,password
  // dbvalidation : email already exists
  // hash the password
  // db : insert user in DB

  const saltRounds = 10;
  bcrypt.hash(password, saltRounds, function (err, hash) {
    dbUsers.push({ email, password: hash });
    console.log("signup for user", email, password);
    console.log("totalUsers", dbUsers);
  });
  console.log("end bcrypt");
};

//  named export
// module.exports.login = login;
// module.exports.signup = signup;

// named export
// module.exports = {
//   login: login,
//   signup: signup,
// };

// export
