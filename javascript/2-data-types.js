// declaration vs instantiation

fullName = "john"; // string
fullName = "sagar"; // string
courseName = "mern";
courseDuration = "3 months";
courseDuration = 3.5; // numberical // float
let isActive = true;

console.log(fullName);
console.log(courseDuration);
console.log(isActive);

// var vs let vs const
var lastName;
lastName = "Sharma";

var coursePrice; // declare
console.log(coursePrice); // undefined
var coursePrice = "24000";
console.log(coursePrice); // 24000

var lastName = "Doe";
var lastName = "Tamang";

// let isActive = false;

let courseDatabase = "MongoDB";
courseDatabase = "Postgress";
courseDatabase = "Mysql";

let color;
color = "red";
color = "green";
color = "orange";
console.log(color);

const userRole = "buyer";

const PI = 3.145;

// const class = "three"; // class is one of reserve keywords

const address = "putalisadak";

console.log(lastName);
console.log(courseDatabase);
console.log(address);

// Es6 : Ecmascript 6  2015
// major changes let const introduced.

// DATA -TYPEs
/*  
    primitive data-types
        string
        number
        boolean
        undefined  // js only
        null  // empty

    non-primitive  ( collections )
        array
            - collections of multiple values
            - usually collection of similar data-types
        object
*/

let size;
console.log(size);

let arr = null;

/* 
    fetch some data from backend
    arr = "some values"
*/

let data;

/* 
    fetch some data from backend
    data = "some values"
*/

// let courses = "mern","qa","python"
let courses = "mern,qa,python";

let course1 = "mern";
let course2 = "qa";
let course3 = "python";
course3 = "ai";

let prices = [100, "200", "three hundred", null];
console.log(prices);
//  donot mix data-types like this.

let course = [course1, course2, course3];
// // subjects and their corresponsinng prices
// let subjects = ["mern", 1000, "python", 2000];



// console.log(subjects); // error

let subjects = ["mer", "python", "qa"];

console.log("prev", subjects[0]);
console.log(subjects[1]);
console.log(subjects[2]);

subjects[0] = "mern-stack";

console.log("after", subjects[0]);
console.log("after", subjects);

console.log(subjects[3])
subjects[3] = "machine learning"


/* 
    TODO: when printing subjects
    i need more detain information of each subjects.
        - price
        - start data
        - end date
        - time
*/






