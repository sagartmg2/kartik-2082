import { Request } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User";

export default {
  getUser: async (req: Request) => {
    // let hashed = await bcrypt.hash(req.body.password, 10);
    // return await User.create({
    //   firstName: req.body.firstName,
    //   lastName: req.body.lastName,
    //   email: req.body.email,
    //   role: req.body.role,
    //   password: hashed,
    // });
  },
  signup: async (req: Request) => {
    let hashed = await bcrypt.hash(req.body.password, 10);
    return await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      isSeller: req.body.isSeller,
      password: hashed,
    });
  },
  login: async (req: Request) => {
    //  check if email exits
    //  fetch its hashed pass
    //  compare password
    // SELECT * from users where email= 'testing@testing.com' LIIMIT 1
    let user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (user) {
      // console.log(user);
      // console.log(user.password);
      // let hased_pw = user.getDataValue("password");

      let userData = user.toJSON();

      // console.log(userData);

      let passwordMatched = await bcrypt.compare(
        req.body.password,
        userData.password,
      );
      if (!passwordMatched) {
        return false;
      }

      delete userData.password;
      delete userData.createdAt;
      delete userData.updatedAt;

      if (process.env.JWT_SECRET) {
        let token = jwt.sign(userData, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });
        console.log(token);

        // comparey hashed password with req.body.password
        // also send jwt token ..  npm i jsonwebtoken

        return {
          ...userData,
          token,
        };
      }
    }

    return false;
  },
};
