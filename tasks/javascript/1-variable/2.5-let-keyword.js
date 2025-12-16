

/* 
        let keyword

        NOTE: once a variable is declared using let keyword, we cannot make  the same variable again using let keyword  BUT we can re-initialize or update it any number of times

*/


let courseName = "MERN"
let courseDurationInMonths = 3


/*
    the below code gives error cause we have already created state variable once and we are again trying to create it. 
*/

let state = "Province One"
let state = "Province Two" // change in this line

/* the above line throws error */

console.log(state); // should print Province Two

/*
    expected output: Province Two

*/



