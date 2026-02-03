import { resolve } from "node:dns";
import authService from "../services/authService";

import { Request, Response, NextFunction } from "express";

const authController = {
  signup: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await authService.signup(req);
      console.log({ user });
      res.send(user);
    } catch (err) {
      next(err);
    }
  },
  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await authService.login(req);

      if (user) {
        res.send(user);
      } else {
        res.status(401).send({
          msg: "invalid createndatinsl",
        });
      }
    } catch (err) {
      next(err);
    }
  },
  getUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // let promise = await new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     console.log(1);
      //     resolve("success");
      //   }, 2000);
      // });
      // console.log(222222);

      res.send({
        // @ts-ignore
        data: req.user,
      });
    } catch (err) {
      next(err);
    }
  },
};
export default authController;
