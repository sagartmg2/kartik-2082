import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(3000, () => {
  console.log("server started");
});

let name = "Ram"; // type inference:  name is set to string

let username: string;
username = "ram234";

let age: number = 12;

let colors: string[] = ["red", "blck"];

const sum = (num1: number, num2: number, num3?: number) => {
  let result = num1 + num2;
};

sum(1, 2);

const double = (num1: number): number => {
  return num1 * 2;
};

interface User {
  age: number;
  name: string;
  address?: string;
}
interface User {
  phone: string;
}

let user: User = {
  age: 12,
  name: "ram",
  address: "balkhu",
  phone: "+977 234234",
};

// user.name.

let person = {
  age: 12,
};

person.age = 14;
// person.address = "balkhu";

type Color = {
  name: string;
  hex: string;
};

let color: Color = {
  name: "red",
  hex: "red",
};


let brand: any;
brand = "Samsugn";
brand = ["samsung"];
brand = {
  name: "samsung",
};

