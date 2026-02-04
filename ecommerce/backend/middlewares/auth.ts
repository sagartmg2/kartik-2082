import { Router, Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const checkAuthentication = (req: Request, res: Response, next: any) => {
  let loggedIn = false;

  if (req.headers.authorization) {
    let token = req.headers.authorization.split(" ")[1];
    console.log(token);

    if (token) {
      if (process.env.JWT_SECRET) {
        let tokenValid = jwt.verify(token, process.env.JWT_SECRET) as {
          id: number;
          firstName: string;
          lastName: string;
          isSeller: boolean;
        };
        // console.log(tokenValid);
        if (tokenValid) {
          loggedIn = true;
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

export const checkSeller = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.user?.isSeller) {
    next();
  } else {
    res.status(403).send({
      msg: "forbidden",
    });
  }
};
