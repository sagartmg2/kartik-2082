import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const checkAuthentication = (req: Request, res: Response, next: any) => {
  let loggedIn = false;

  if (req.headers.authorization) {
    let token = req.headers.authorization.split(" ")[1];
    console.log(token);

    if (token) {
      if (process.env.JWT_SECRET) {
        let tokenValid = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(tokenValid);
        if (tokenValid) {
          loggedIn = true;
          // @ts-ignore
          req.user = tokenValid;
        }
      }
    }
  }

  if (loggedIn) {
    next();
  } else {
    res.status(401).send("unauthtenticateed");
  }
};
