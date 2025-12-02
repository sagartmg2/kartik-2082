/* 
    array: collections of elements

    each element can be accessed, modified via index

*/

let user1 = "john";
let user2 = "ram";
let user3 = "hari";

let users = [user1, user2, user3, "shyam"];

// code here to add new user
users[4] = "sita";
users[2] = "hari bdr";

console.log(users[4]);
console.log(users);

// let subjects = ["mern", "python", "qa"];

let subject1 = {
  title: "mern",
  price: 1000,
  startDate: "jan 1",
  endDate: "Apr 1",
  time: "8 AM",
  durationInHr: 1,
};

let subject2 = {
  title: "python",
  price: 2000,
  startDate: "jan 5",
  endDate: "Apr 5",
  time: "9 AM",
  durationInHr: 1,
};

let subjects = [
  {
    title: "mern",
    price: 1000,
    startDate: "jan 1",
  },
  {
    title: "python",
    price: 2000,
    startDate: "jan 5",
  },
];

console.log(subjects);

/* 
    TODO: when printing subjects
    i need more detail information of each subjects.
        - price
        - start data
        - end date
        - time
*/

let user = "ram";
user = "sita";
console.log(user);

// let projector = "sony";

/* 
    Object : similar to real-life objects

    key value pair

*/

// let courses = ["mern", "python", "qa"];
// courses[4] = "ml"
// console.log(courses);

let projector = {
  color: "white",
  price: 10000,
  isSmart: true,
  brand: "sony",
};

console.log("prev", projector);
console.log("dimension", projector.dimension);

console.log("prev", projector.isSmart);
projector.isSmart = false;

projector.dimension = "2 x 3 x 5";
// code here to add new property dimension

console.log("after", projector.isSmart);
console.log("after", projector);
